import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 1000,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 1000),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set name
        </button>
        {this.state.isClockVisible && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
