import React from 'react';
import { Clock } from './component/Clock';

import './App.scss';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock №
          {isClockVisible && (clockName)}
        </h1>

        <p>
          Current time:
          {isClockVisible && (
            <Clock
              isClockVisible={isClockVisible}
              name={clockName}
            />
          )}

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide Clock
          </button>
        </p>

        <p>
          <button
            className="button"
            type="button"
            onClick={() => this.setState({ clockName: getRandomInt(10) })}
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
