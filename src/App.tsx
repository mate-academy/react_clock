/* eslint-disable @typescript-eslint/lines-between-class-members */
import React from 'react';
import './App.scss';
import { AppState } from './types/AppState';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class App extends React.Component<{}, AppState> {
  timerIdClockName = 0;
  timerIdCurrentTime = 0;
  timeInDevTools = 0;

  state: AppState = {
    clockName: 'Clock-0',
    currentTime: '',
    hasClock: true,
    isConsoleLogRunning: true,
  };

  componentDidMount() {
    this.timeInDevTools = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerIdCurrentTime = window.setInterval(() => {
      this.setState({ currentTime: getCurrentTime() });
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
      window.clearInterval(this.timeInDevTools);
      this.setState({ isConsoleLogRunning: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });

      if (!this.state.isConsoleLogRunning) {
        this.setState({ isConsoleLogRunning: true });
        this.timeInDevTools = window.setInterval(() => {
          // eslint-disable-next-line no-console
          console.log(new Date().toUTCString().slice(-12, -4));
        }, 1000);
      }
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdClockName);
    window.clearInterval(this.timerIdCurrentTime);
    window.clearInterval(this.timeInDevTools);
  }

  render() {
    const { clockName, currentTime, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} currentTime={currentTime} />}
      </div>
    );
  }
}
