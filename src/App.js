import React from 'react';
import Clock from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
  }

  showClock = () => (
    this.setState({ isClockVisible: true })
  );

  hideClock = () => (
    this.setState({ isClockVisible: false })
  );

  changeName = () => (
    this.setState({ clockName: Math.floor(Math.random() * (100 - 1 + 1)) + 1 })
  );

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {this.state.clockName}
        </h1>
        {this.state.isClockVisible
          && <Clock name={this.state.clockName} />}
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
          onClick={this.changeName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
