import React from 'react';

import './App.scss';

import Clock from '../Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'noneRandomName',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed
        from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  getRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  setRandomName = () => {
    const names = ['Mike', 'Joshua', 'Toretto', 'Cage', 'Bob', 'Stanley'];
    const randName = names[this.getRandInt(0, names.length - 1)];

    this.setState({ clockName: randName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible ? (
            <Clock name={this.state.clockName} />
          )
            : (
              'clock is hidden'
            )}
        </p>
        <button type="button" onClick={this.setRandomName}>
          Set random name:
        </button>
      </div>
    );
  }
}

export default App;
