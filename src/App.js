import React from 'react';
import './App.scss';
import { Clock } from './clock';

let interval;

class App extends React.Component {
  state = {
    isClockVisible: false,
    time: new Date().toLocaleTimeString(),
    clockName: 0,
  }

  componentDidUpdate(_, prevState) {
    clearInterval(interval);
    const { isClockVisible, clockName } = this.state;

    if (clockName !== prevState.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${clockName}`)
    }

    if (isClockVisible) {
      interval = setInterval(() => {
        const date = new Date().toLocaleTimeString();

        // eslint-disable-next-line
        console.log(date);
        this.setState({ time: date });
      }, 1000);
    }
  }

  render() {
    const { isClockVisible, time, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide clock
        </button>

        {isClockVisible
          && (
          <Clock
            currentTime={time}
            name={clockName}
          />
          )}
      </div>
    );
  }
}

export default App;
