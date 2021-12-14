/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Clock from './Clock';
import './App.scss';

// type Timer = ReturnType<typeof setTimeout>;
export default class App extends React.Component {
  timerId = 0;

  state = {
    date: new Date(),
    isClockVisible: false,
    clockName: 0,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(_prevProps: unknown, prevState: { clockName: number; }) {
    if (this.state.isClockVisible && this.state.clockName !== prevState.clockName) {
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  static getRandomIntInclusive(min: number, max: number) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);

    return Math.floor(
      Math.random() * (newMax - newMin + 1) + newMin,
    ); // The maximum is inclusive and the minimum is inclusive
  }

  handleShowClock = () => {
    this.setState({ isClockVisible: true });
  };

  handleHideClock = () => {
    this.setState({ isClockVisible: false });
  };

  handleRandomName = () => {
    // const name = Math.random();

    this.setState({ clockName: App.getRandomIntInclusive(0, 100) });
  };

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.handleShowClock}
        >
          Show clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.handleHideClock}
        >
          Hide clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.handleRandomName}
        >
          Set random name
        </button>
        {isClockVisible
          && <Clock value={this.state.date} name={this.state.clockName} />}
      </div>
    );
  }
}

// export default App;
