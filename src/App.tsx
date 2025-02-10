import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  today = new Date();

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    document.addEventListener('contextmenu', () =>
      this.setState({ hasClock: false }),
    );

    document.addEventListener('click', () => this.setState({ hasClock: true }));

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
