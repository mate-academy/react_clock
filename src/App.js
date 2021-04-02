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

  setRandomName = () => {
    this.setState({
      clockName: Math.trunc(Math.random() * 1000),
    });
  }

  render() {
    const { clockName, isClockVisible } = this.state
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <h2>{`Clock name: ${clockName}`}</h2>
          {isClockVisible && <Clock name={clockName} />}
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
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;
