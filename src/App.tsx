import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  name: string;
};

type ClockState = {
  time: Date;
};

class Clock extends React.Component<ClockProps, ClockState> {
  private timeId?: number;

  state: ClockState = {
    time: new Date(),
  };

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));

      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timeId) {
      window.clearInterval(this.timeId);
    }
  }

  render(): React.ReactNode {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  private nameInterval?: number;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.nameInterval = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    if (this.nameInterval) {
      window.clearInterval(this.nameInterval);
    }
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
