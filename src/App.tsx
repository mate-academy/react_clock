/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean
  clockName: string
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component <{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    this.hander1();
    this.handeler2();

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  hander1 = () => {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  };

  handeler2 = () => document.addEventListener('click', () => {
    this.setState({ hasClock: true });
  });

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
