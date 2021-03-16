import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100) + 1,
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100) + 1,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            : <></>}
        </p>
        <p>
          Current random number:
          {' '}
          {this.state.clockName}
        </p>

        <button type="button" onClick={this.showClock}>
          Show clock
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
