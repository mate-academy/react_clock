import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 33,
  }

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  generateName = () => this.setState(
    { clockName: Math.ceil(Math.random() * 100) },
  );

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
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
          onClick={this.generateName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
