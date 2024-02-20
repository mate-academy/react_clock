import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  today = new Date();

  clockName = 'Clock-0';

  // This code starts a timer
  timerId = window.setInterval(() => {
    this.clockName = getRandomName();
  }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock />
      </div>
    );
  }
}
