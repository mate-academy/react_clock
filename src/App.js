import React, { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock';

export class App extends Component {
  state = {
    isClockVisible: false,
    clockName: Math.floor(Math.random() * 10),
  }

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

  randomizeName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="clock">
        <div className="clock__timer">
          {this.state.isClockVisible
            ? <Clock name={clockName} />
            : 'Clock is hidden'}
        </div>
        <div className="buttons-container">
          <span className="btn-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.showClock}
            >
              Show Clock
            </button>
          </span>

          <span className="btn-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
          </span>

          <span className="btn-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.randomizeName}
            >
              Set random name
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
