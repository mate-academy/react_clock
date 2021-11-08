import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  timerOn = () => {
    this.setState({ isClockVisible: true });
  };

  timerOff = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button type="button" onClick={this.timerOn}>
          Show Clock
        </button>

        <button type="button" onClick={this.timerOff}>
          Hide Clock
        </button>

        <p>Random name</p>
        <button type="button" onClick={this.changeName}>
          Set random name
        </button>
        <p>{`clockName: ${this.state.clockName}`}</p>
      </div>
    );
  }
}

export default App;
