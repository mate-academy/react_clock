import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 1,
  };

  setRandomName() {
    this.setState(() => ({ clockName: Math.floor(Math.random() * 1000) }));
  }

  showClock() {
    this.setState(() => ({ isClockVisible: true }));
  }

  hideClock() {
    this.setState(() => ({ isClockVisible: false }));
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          isClockVisible={this.state.isClockVisible}
          name={this.state.clockName}
        />
        <button
          type="button"
          onClick={() => this.showClock()}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.hideClock()}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setRandomName()}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
