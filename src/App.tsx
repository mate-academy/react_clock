/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdClock = 0;

  componentDidMount() {
    document.addEventListener('click', this.getHasClockTtrue);

    document.addEventListener('contextmenu', this.getHasClockFalse);
    this.timerIdClock = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.getHasClockTtrue);
    document.removeEventListener('contextmenu', this.getHasClockFalse);

    clearInterval(this.timerIdClock);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  getHasClockTtrue = () => {
    this.setState({ hasClock: true });
  };

  getHasClockFalse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        { hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
