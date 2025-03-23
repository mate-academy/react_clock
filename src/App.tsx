import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  time: Date;
}

class Clock extends Component<ClockProps, ClockState> {
  timerId: ReturnType<typeof setTimeout> | null = null;

  state: ClockState = {
    time: new Date(),
  };

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      const newTime = new Date();

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  nameTimerId: NodeJS.Timeout | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    const updateClockName = () => {
      this.setState({ clockName: getRandomName() });

      this.nameTimerId = setTimeout(updateClockName, 3300);
    };

    this.nameTimerId = setTimeout(updateClockName, 3300);

    document.addEventListener('click', this.handleClick);

    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    if (this.nameTimerId) {
      clearTimeout(this.nameTimerId);
      this.nameTimerId = null;
    }

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
