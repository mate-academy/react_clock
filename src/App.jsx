/* eslint-disable no-console */
import React from 'react';

import './App.scss';

import Clock from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { clockName } = this.state;

    if (prevState.clockName !== clockName) {
      console.log(`The Clock was renamed from ${prevState.clockName}
      to ${clockName}.`);
    }
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible ? <Clock name={clockName} /> : 'Clock is hidden'}
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
            this.setState({ clockName: Math.floor(Math.random() * 1000) });
          }}
        >
          Set name
        </button>
      </div>
    );
  }
}

export default App;
