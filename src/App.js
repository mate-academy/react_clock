import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App__button">
          <button
            type="button"
            className="button is-success is-rounded"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="button is-danger is-rounded"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide CLock
          </button>
          <button
            type="button"
            className="button is-info is-rounded"
            onClick={() => {
              const clockNumName = Math.ceil(Math.random() * 10);

              this.setState({ clockName: clockNumName });
            }}
          >
            Set random name
          </button>
        </div>

        <p>
          Current time:
        </p>
        <>
          {isClockVisible && (
          <Clock name={clockName} />
          )}
        </>
      </div>
    );
  }
}

export default App;
