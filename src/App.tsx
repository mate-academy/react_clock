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

  setName = () => {
    const newName = Math.random();

    this.setState({ clockName: newName });
    // eslint-disable-next-line
    <Clock name={this.state.clockName} />;  // ?? where? 
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
          onClick={this.setName}
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
