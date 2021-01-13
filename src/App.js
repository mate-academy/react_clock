import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Gerund',
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: `[${(new Date()).toLocaleTimeString()}]` });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        {'\n'}
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        {'\n'}
        <button type="button" onClick={this.changeName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
