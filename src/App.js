import React, { Component } from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends Component {
    state = {
      isClockVisible: true,
      clockName: 0,
    };

    showClock = () => {
      this.setState({ isClockVisible: true });
    };

    hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    makeRandomName = () => {
      this.setState({ clockName: Math.floor(Math.random() * 1000) });
    };

    render() {
      const { isClockVisible, clockName } = this.state;

      return (
        <div>
          <h1>React clock</h1>
          <p>
            Current time:
            {isClockVisible && <Clock name={clockName} />}
          </p>
          <button
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>
          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>
          <button
            type="button"
            onClick={this.makeRandomName}
          >
            Set random name
          </button>
        </div>
      );
    }
}

export default App;
