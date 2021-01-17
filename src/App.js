import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    isClockVisible: true,
    clockName: 0,
    timerId: null,
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    const timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);

    this.setState({ timerId });
  }

  stopClock = () => {
    clearInterval(this.state.timerId);
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
    this.startClock();
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
    this.stopClock();
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
