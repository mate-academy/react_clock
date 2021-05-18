import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'clock N-0',
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="clock">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
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
              clockName: `clock N-${Math.ceil(Math.random() * 100)}`,
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
