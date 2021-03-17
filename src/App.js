import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  showClock = (event) => {
    this.setState({ isClockVisible: true });
  };

  hideClock = (event) => {
    this.setState({ isClockVisible: false });
  };

  changedName = (event) => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.changedName}
        >
          Set random name
        </button>
        <p>
          Current time:
          {' '}
          { this.state.isClockVisible && <Clock name={this.state.clockName} /> }
        </p>
      </div>
    );
  }
}

export default App;
