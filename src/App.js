import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClockVisible: true,
      clockName: '',
    };
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    const randomSet = Math.random().toString(36);
    const name = randomSet.substring(2).replace(/\d/g, '').toUpperCase();

    if (this.state.clockName.length) {
      console.log(`The Clock was renamed from ${this.state.clockName}`
        + ` to ${name}`);
    }

    this.setState({ clockName: name });
  }

  render() {
    return (
      <div className="App timer">
        <h1>React clock</h1>

        <button
          type="button"
          className="timer-btn"
          value="Show"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="timer-btn"
          value="Hide"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="timer-btn btn-special"
          value="Set random name"
          onClick={this.setRandomName}
        >
          Set random name
        </button>

        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
