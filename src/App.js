import React from 'react';

import './App.scss';
import { Clock } from './Components/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.floor(Math.random() * 10) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}
