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
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          type="button"
          className="App__button"
          onClick={this.showClock}
          disabled={isClockVisible}
        >
          Show clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.hideClock}
          disabled={!isClockVisible}
        >
          Hide clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}
