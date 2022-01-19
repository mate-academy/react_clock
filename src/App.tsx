import React from 'react';
import { Clock } from './Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          className="App__button App__button--show"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          className="App__button App__button--hide"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <div>
          <p>
            Current time:
            {' '}
            {this.state.isClockVisible ? <Clock /> : 'clock are hidden'}
          </p>
        </div>
      </div>
    );
  }
}
