import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 'Petro',
  }

  showClock = () => {
    this.setState(
      { isClockVisible: true },
    );
  }

  hideClock = () => {
    this.setState(
      { isClockVisible: false },
    );
  }

  setClockName= () => {
    this.setState(
      { clockName: String(Math.floor(Math.random() * (50 - 0 + 1)) + 0) },
    );
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current Time:
          {' '}
          {this.state.isClockVisible
          && <Clock clockName={this.state.clockName} />}
        </p>
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
        <button type="button" onClick={this.setClockName}>Random Name</button>
      </div>
    );
  }
}

export default App;
