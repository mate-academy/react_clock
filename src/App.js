import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.trunc(Math.random() * 1000),
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

  randomName = () => {
    this.setState({
      clockName: Math.trunc(Math.random() * 1000),
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <h2>{`Clock name: ${this.state.clockName}`}</h2>
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
          <button
            type="button"
            className="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="button"
            onClick={this.randomName}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;
