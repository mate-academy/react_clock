import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  };

  generateRandomName = () => {
    this.setState({ clockName: Math.random() });

    if (this.state.isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from oldName to newName`);
    }
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.generateRandomName}>
          Random name
        </button>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
      </div>
    );
  }
}

export default App;
