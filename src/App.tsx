/* eslint-disable no-empty-pattern */
/* eslint-disable react/sort-comp */
import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  showClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  hideClock = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentDidUpdate({}, prevState: State) {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      window.console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      this.state.hasClock ? <Clock name={this.state.clockName} /> : null
    );
  }
}
