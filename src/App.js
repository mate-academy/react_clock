import React, { Component } from 'react';

import Clock from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  makeRandomName = () => {
    this.setState({ clockName: Date.now() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="time">
          Current time:
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <button
          type="button"
          className="btn btn-show"
          onClick={this.showClock}
        >
          Show
        </button>
        <button
          type="button"
          className="btn btn-hide"
          onClick={this.hideClock}
        >
          Hide
        </button>
        <button
          type="button"
          className="btn btn-random-name"
          onClick={this.makeRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
