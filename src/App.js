import React from 'react';
import { Clock } from './Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={() => {
            if (isClockVisible) {
              this.setState({
                clockName: Math.round(Math.random() * 1000),
              });
            }
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}
