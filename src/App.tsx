import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 1000),
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  renameClock = () => {
    this.setState({
      clockName: Math.round(Math.random() * 1000),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock clockName={this.state.clockName} />}
        </p>

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.renameClock}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
