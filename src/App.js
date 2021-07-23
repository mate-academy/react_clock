import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
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

  randomName = () => {
    this.setState({
      clockName: `${Math.ceil(Math.random() * 777)}`,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="content">
        <h1>React clock</h1>

        <p className="current">
          Current time:
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.randomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
