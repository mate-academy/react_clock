import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: '0',
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    if (!this.state.isClockVisible) {
      return;
    }

    this.setState({ clockName: `${Math.random().toFixed(1)}` });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {`Current time: `}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button type="button" onClick={this.showClock}>
          Show clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>
        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
