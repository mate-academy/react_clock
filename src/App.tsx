/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerId: number | null = null;

  secondsTimerId:number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockHidden);
    document.addEventListener('click', this.handleClockDisplay);

    this.secondsTimerId = window.setInterval(() => {
      console.info(this.state.today.toUTCString().slice(-12, -4));

      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    if (this.secondsTimerId !== null) {
      window.clearInterval(this.secondsTimerId);
    }

    document.removeEventListener('contextmenu', this.handleClockHidden);
    document.removeEventListener('click', this.handleClockDisplay);
  }

  handleClockHidden = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClockDisplay = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
            today={today}
          />
        )}
      </div>
    );
  }
}
