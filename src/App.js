import React from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
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
