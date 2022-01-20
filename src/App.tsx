import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <p className="clock">
          {isClockVisible
            ? <Clock />
            : 'Clock is hidden'}
        </p>
        <button
          type="button"
          className="button show-clock"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="button hide-clock"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
