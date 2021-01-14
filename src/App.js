import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    isClockVisible: true,
    clockName: 0,
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.state.isClockVisible) {
        return;
      }

      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          time={this.state.time}
          visibility={this.state.isClockVisible}
          name={this.state.clockName}
        />

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
