import React from 'react';
import './App.scss';
import { Clock } from './componenets/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  activateState = () => {
    this.setState({ isClockVisible: true });
  };

  deactivateState = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          id="ShowClock"
          onClick={this.activateState}
        >
          Show clock
        </button>
        <button
          type="button"
          id="HideClock"
          onClick={this.deactivateState}
        >
          Hide clock
        </button>
        <button
          type="button"
          id="SetName"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
        <br />
        Current time:
        {' '}
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
