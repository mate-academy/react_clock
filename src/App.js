import React from 'react';
import { Clock } from './Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: Math.floor(Math.random() * 1000),
    isClockVisible: true,
  }

  randomName() {
    const randomName = Math.floor(Math.random() * 1000);
    // eslint-disable-next-line
    console.log(`The clock was renamed from ${this.state.clockName} to ${randomName}`);
    this.setState({ clockName: randomName });
  }

  showClock() {
    this.setState({ isClockVisible: true });
  }

  hideClock() {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>A Clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <div>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.showClock();
            }}
          >
            Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.hideClock();
            }}
          >
            Hide clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => this.randomName()}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
