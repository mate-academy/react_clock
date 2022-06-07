import React from 'react';
import './App.scss';
import { Clock } from './clock';

type State = {
  isClockVisible: boolean
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: false,
  };

  clockVisible = () => {
    this.setState({ isClockVisible: true });
  };

  clockInvisible = () => (this.setState({ isClockVisible: false }));

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
        </p>
        {this.state.isClockVisible && (
          <Clock />
        )}
        <button
          className="button"
          type="button"
          onClick={this.clockVisible}
        >
          Show Clock
        </button>
        <button
          className="button"
          type="button"
          onClick={this.clockInvisible}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}
