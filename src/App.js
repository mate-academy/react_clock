import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  randomClockName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock newName={this.state.clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={this.randomClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
