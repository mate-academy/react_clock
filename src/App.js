import React, { Component } from 'react';

import './App.scss';
import Clock from './components/Clock';

class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
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
  }

  render() {
    const currClockName = this.state.clockName;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {
            this.state.isClockVisible
              ? <Clock name={currClockName} />
              : null
          }
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
