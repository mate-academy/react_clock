import React from 'react';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {
          isClockVisible && <Clock name={clockName} />
          }
        </p>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
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
