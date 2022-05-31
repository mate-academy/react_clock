/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { ClockName } from './components/ClockName';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 10),
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div
        className="App"
      >
        <h1>React clock</h1>
        {isClockVisible && (
          <Clock />
        )}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.floor(Math.random() * 10) });
          }}
        >
          Random Name
        </button>
        <ClockName name={this.state.clockName} />
      </div>
    );
  }
}

export default App;
