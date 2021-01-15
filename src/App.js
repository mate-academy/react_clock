/* eslint-disable no-console */
import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      console.log(`The Clock was renamed from `
    + `${prevState.clockName} to ${this.state.clockName}`);
    }

    return false;
  }

  setClockName = () => {
    const randomNumber = Math.floor(Math.random() * 1001);

    this.setState(prevState => ({
      clockName: randomNumber,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="buttons">
          <button
            type="button"
            className="buttons__showClock"
            onClick={() => {
              this.setState(prevState => ({ isClockVisible: true }));
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="buttons__hideClock"
            onClick={() => {
              this.setState(prevState => ({ isClockVisible: false }));
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.setClockName}
            className="buttons__setRandomName"
          >
            Set random name
          </button>
        </div>
        <div className="currentTime">
          {'Current time: '}
          {this.state.isClockVisible
            ? <Clock clockName={this.state.clockName} />
            : 'Push Show Button'}
        </div>
      </div>
    );
  }
}

export default App;
