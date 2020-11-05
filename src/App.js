import React from 'react';

import './App.scss';
import Clock from './Clock/Clock';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {isClockVisible && (
            <Clock isClockVisible={isClockVisible} name={clockName} />
          )}
        </p>
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
          onClick={() => this.setState({ clockName: getRandomInt(10) })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
