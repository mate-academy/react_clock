/* eslint-disable no-console */

import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: State = {
    date: new Date(),
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  updateName = 0;

  componentDidMount = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      if (this.state.hasClock) {
        console.log(this.state.date.toLocaleTimeString());
      }
    }, 1000);
    this.updateName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  };

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.updateName);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  componentDidUpdate = (
    _: {},
    prevState: Readonly<State>,
  ) => {
    if (prevState.clockName !== this.state.clockName) {
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    return this.state.hasClock && (
      <div className="App">
        <h1>React clock</h1>

        <Clock clockName={this.state.clockName} date={this.state.date} />
      </div>
    );
  }
}
