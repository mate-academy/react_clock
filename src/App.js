/* eslint-disable no-console */
import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 1,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <span className="clock">
            {isClockVisible && (
            <Clock
              isClockVisible={isClockVisible}
              name={clockName}
            />
            )}
          </span>
        </p>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              clockName: Math.round(Math.random() * 100),
            });
          }}
        >
          Set random name
        </button>

      </div>
    );
  }
}

export default App;
