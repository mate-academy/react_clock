/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.hideClock();
          }}
        >
          Hide Clock
        </button>
        <div>
          {this.state.isVisible && <Clock />}
        </div>
      </div>
    );
  }
}
