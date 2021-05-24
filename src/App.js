import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Clock Name № 0',
  }

  showClock = () => {
    this.setState(() => ({
      isClockVisible: true,
    }));
  };

  hideClock = () => {
    this.setState(() => ({
      isClockVisible: false,
    }));
  };

  randomClockName = () => {
    this.setState(() => ({
      clockName: `Clock Name № ${Math.round(Math.random() * 100)}`,
    }));
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="Clock">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <div className="Clock__buttons">
          <button type="button" onClick={this.showClock}>
            Show Clock
          </button>
          <button type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
          <button type="button" onClick={this.randomClockName}>
            Set Random Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
