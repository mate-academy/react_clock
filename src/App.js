import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
    oldName: null,
  };

  setName = () => {
    this.setState(prev => ({
      oldName: prev.clockName,
      clockName: prev.clockName + Math.trunc(Math.random() * 100),
    }));

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.oldName} to ${this.state.clockName}`);
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

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible
          && <Clock name={clockName} />}
        </p>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.setName}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}
