import React from 'react';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
    // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName}`
        + ` to ${this.state.clockName} newName.`);
    }
  }

  randomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10000) });
  };

  showClock = () => (this.setState({ isClockVisible: true }));

  hideClock = () => (this.setState({ isClockVisible: false }));

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { isClockVisible && <Clock name={clockName} /> }
        <button type="button" onClick={this.showClock}>
          Show time
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide time
        </button>
        <button type="button" onClick={this.randomName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
