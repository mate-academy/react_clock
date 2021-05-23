import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'null',
  };

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

  changeName = () => {
    this.setState({
      clockName: `${Math.ceil(Math.random() * 100)}`,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="clock">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <button
          type="button"
          className="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          className="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          className="button"
          onClick={this.changeName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
