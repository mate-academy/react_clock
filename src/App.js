import React from 'react';
import { Clock } from './Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.trunc(Math.random() * 1000),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <div className="App__buttons">
          <button onClick={this.showClock} type="button">
            Show Clock
          </button>
          <button onClick={this.hideClock} type="button">
            Hide Clock
          </button>
          <button onClick={this.setRandomName} type="button">
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
