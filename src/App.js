import React from 'react';
import './App.scss';
import { Clock } from './clock';

let interval;

class App extends React.Component {
  state = {
    isClockVisible: false,
    time: new Date().toLocaleTimeString(),
  }

  componentDidUpdate() {
    clearInterval(interval);

    if (this.state.isClockVisible) {
      interval = setInterval(() => {
        const date = new Date().toLocaleTimeString();

        // eslint-disable-next-line
        console.log(date);
        this.setState({ time: date });
      }, 1000);
    }
  }

  render() {
    const { isClockVisible, time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
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
        {isClockVisible && <Clock currentTime={time} />}
      </div>
    );
  }
}

export default App;
