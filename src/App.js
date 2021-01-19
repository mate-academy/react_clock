import React, { Component } from 'react';

import './App.scss';
import Clock from './components/Clock';

class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  renameClock = () => {
    this.setState({
      clockName: Math.random(),
    });

    // eslint-disable-next-line
    console.log(
      `The Clock was renamed to ${this.state.clockName}`,
    );
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          { isClockVisible && <Clock /> }
        </p>
        <button
          type="button"
          className="button-clock"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="button-clock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="button-clock"
          onClick={this.renameClock}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
