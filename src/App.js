import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 'Clock: 0',
    isClockVisible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      window.console.log(
        // eslint-disable-next-line
        `The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}.`,
      );
    }
  }

  setRandomName() {
    this.setState({
      clockName: `Clock name: ${Math.floor(Math.random() * 100)}`,
    });
  }

  showClock() {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock() {
    this.setState({
      isClockVisible: false,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            { isClockVisible && <Clock name={clockName} />}
          </p>
        </div>
        <button
          type="button"
          className="showClock"
          onClick={this.showClock.bind(this)}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="hideClock"
          onClick={this.hideClock.bind(this)}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="setRandomName"
          onClick={this.setRandomName.bind(this)}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
