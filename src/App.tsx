import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private intervalId: NodeJS.Timeout | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.startClockNameUpdate();

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  startClockNameUpdate = () => {
    this.intervalId = setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
