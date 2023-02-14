/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import Clock from './Clock';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

// This code starts a timer
// const timerId = window.setInterval(() => {
//   clockName = getRandomName();
// }, 3300);

// this code stops the timer
// window.clearInterval(timerId);

type State = {
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
  };

  clockId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock />}
      </div>
    );
  }
}
