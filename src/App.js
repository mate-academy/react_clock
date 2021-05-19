import React from 'react';
import { Clock } from './Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

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
