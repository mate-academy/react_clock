import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 1000),
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    this.setState({ clockName: Math.round(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.hideClock}
          disabled={!isClockVisible}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
          disabled={isClockVisible}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.renameClock}
        >
          Set random name
        </button>
        {isClockVisible && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
