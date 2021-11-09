import React from 'react';
import './App.scss';
import { Clock } from './conponents/Clock';

interface State {
  isClockVisible: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        {isClockVisible && <Clock />}
      </div>
    );
  }
}
