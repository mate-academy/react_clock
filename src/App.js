import React from 'react';

import './App.scss';
import { Clock } from './Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="timer">
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )
          }
        </div>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
