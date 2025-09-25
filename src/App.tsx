import React from 'react';
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

class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    time: new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
    ),
  };

  intervalId?: number;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const now = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
      );

      this.setState({ time: now });

      const formattedTime = now.toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(formattedTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;
    const formattedTime = time.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong> time is{' '}
        <span className="Clock__time">{formattedTime}</span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClock);
    document.addEventListener('click', this.handleLeftClick);
  }

  handleRightClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleRightClock);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
