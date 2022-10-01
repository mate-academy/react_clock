/* eslint-disable no-console */
import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.contextmenu);

    document.addEventListener('click', this.onClick);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.contextmenu);

    document.removeEventListener('click', this.onClick);
  }

  contextmenu = () => this.setState({ hasClock: false });

  onClick = () => this.setState({ hasClock: true });

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
