import React from 'react';
import { Clock } from './Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  changeName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 1000),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <p>
          Current time:
          {isClockVisible ? <Clock name={clockName} /> : ''}
        </p>
        <div className="buttonsBlock">
          <button
            className="buttonsBlock__button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="buttonsBlock__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="buttonsBlock__button"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
