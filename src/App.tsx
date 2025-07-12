import React from 'react';
import './App.scss';
import { Clock } from './component/Clock/Clock';

type State = {
  time: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    time: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  startTimers() {
    this.setState({ time: new Date() });

    this.timerId = window.setInterval(() => {
      const newName = this.getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    this.timerInterval = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  stopTimers() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerInterval);
  }

  timerId = 0;

  timerInterval = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.startTimers();
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }

    if (prevState.hasClock !== this.state.hasClock) {
      if (!this.state.hasClock) {
        this.stopTimers();
      } else {
        this.startTimers();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimers();
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const { time, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} time={time} />}
      </div>
    );
  }
}
