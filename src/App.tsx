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

  hider = () => {
    this.setState({ isClockVisible: false });
  };

  shower = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.hider}
        >
          Hide Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.shower}
        >
          Show Clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}
