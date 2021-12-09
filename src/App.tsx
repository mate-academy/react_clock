import React from 'react';
import './App.scss';

import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.trunc(Math.random() * 1000),
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.trunc(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="card">
        {isClockVisible && <Clock name={clockName} />}

        <button type="button" disabled={isClockVisible} onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" disabled={!isClockVisible} onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.changeName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
