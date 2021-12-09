import React from 'react';
import './App.scss';

import Clock from './components/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          type="button"
          className="App__button"
          onClick={this.showClock}
        >
          Show clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}
