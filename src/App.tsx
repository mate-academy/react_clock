import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName() {
  return `Clock-${Math.ceil(Math.random() * 10000)}`;
}

interface AppState {
  hasClock: boolean,
  clockName: string,
}

export class App extends React.Component<{}, AppState> {
  private intervalId?: number;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 1000);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
