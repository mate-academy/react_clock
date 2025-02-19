import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface State {
  clockName: string;
  time: string;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  private timerId: NodeJS.Timeout | null = null;

  private nameIntervalId: NodeJS.Timeout | null = null;

  state: State = {
    clockName: 'Clock-0',
    time: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  componentDidMount() {
    this.startTimers();
    window.addEventListener('click', this.toggleClockVisibility);
  }

  componentWillUnmount() {
    this.clearTimers();
    window.removeEventListener('click', this.toggleClockVisibility);
  }

  startTimers() {
    this.timerId = setInterval(() => {
      if (this.state.hasClock) {
        this.setState({ time: new Date().toUTCString().slice(-12, -4) });
        // Remove console.log or disable the ESLint rule if needed:
        // console.log(this.state.time);
      }
    }, 1000);

    this.nameIntervalId = setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
      // Remove console.warn or disable the ESLint rule if needed:
      // console.warn(`Clock name updated: ${newName}`);
    }, 3300);
  }

  clearTimers() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  }

  toggleClockVisibility = () => {
    this.setState(prevState => ({ hasClock: !prevState.hasClock }));
  };

  render() {
    const { clockName, time, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{time}</span>
          </div>
        )}
      </div>
    );
  }
}
