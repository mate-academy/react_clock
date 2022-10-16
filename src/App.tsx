/* eslint-disable no-console */
import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  randomName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    randomName: 'Clock-0',
    hasClock: true,
    intervalId: 0,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', event => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', event => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });

    this.state.intervalId = window.setInterval(() => {
      this.setState({ randomName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps:{}, prevState:State): void {
    if (this.state.hasClock && prevState.randomName !== this.state.randomName) {
      console.debug(`Renamed from ${prevState.randomName} to ${this.state.randomName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { randomName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock randomName={randomName} />}
      </div>
    );
  }
}
