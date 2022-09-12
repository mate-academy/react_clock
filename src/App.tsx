import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
