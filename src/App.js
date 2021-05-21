import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * (999 - 100) + 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName || ''}`}</h1>
        <span />
        <p>
          {'Current time: '}
          {isClockVisible && <Clock newClockName={this.state.clockName} />}
          {}
        </p>

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
