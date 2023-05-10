import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  clockName: string;
}

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
  };

  // const today = new Date();

  // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock clockName={this.state.clockName} />
      </div>
    );
  }
}
