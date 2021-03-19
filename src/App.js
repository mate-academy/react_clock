import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isClockVisible: true,
      clockName: 0,
    };
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  renameClock = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          isClockVisible && <Clock name={clockName} />
        }
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide the Clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show the Clock
        </button>
        <button
          type="button"
          onClick={this.renameClock}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
