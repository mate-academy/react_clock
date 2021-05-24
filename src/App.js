import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 'Clock: 0',
    isClockVisible: true,
  };

  setRandomName = () => {
    this.setState({
      clockName: `Clock name: ${Math.floor(Math.random() * 100)}`,
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
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            { isClockVisible && <Clock name={clockName} />}
          </p>
        </div>
        <button
          type="button"
          className="showClock"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="hideClock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="setRandomName"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
