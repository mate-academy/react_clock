/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './componenrts/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, AppState> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.showClock);

    document.addEventListener('click', this.hideClock);
  }

  componentWillUnmount() {
    this.setState({ hasClock: false });
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  hideClock = () => {
    this.setState({ hasClock: true });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
