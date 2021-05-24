import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.random(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
