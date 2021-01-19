import React from 'react';

import './App.scss';
import Clock from './Components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
    clockNewName: null,
  };

  generateRandomName = () => {
    this.setState({ clockNewName: Math.random() });

    if (this.state.isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${this.state.clockName} to
                    ${this.state.clockNewName}`);
    }

    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ clockName: this.state.clockNewName });
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
