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
  today: Date;
};

class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  currentClockName: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    currentClockName: 'Clock-0',
  };

  timerIdClockName: number | undefined;

  componentDidMount(): void {
    this.timerIdClockName = window.setInterval(() => {
      this.setState({ currentClockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.rightButtonClick);
    window.addEventListener('click', this.leftButtonClick);
  }

  componentWillUnmount(): void {
    if (this.timerIdClockName) {
      window.clearInterval(this.timerIdClockName);
    }

    window.removeEventListener('contextmenu', this.rightButtonClick);
    window.removeEventListener('click', this.leftButtonClick);
  }

  rightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButtonClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, currentClockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={currentClockName} />}
      </div>
    );
  }
}
