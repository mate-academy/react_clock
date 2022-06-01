import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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
        <img src="images/icon2.png" alt="logo" className="icon" />
        <p className="clock">
          {isClockVisible
            ? <Clock />
            : 'Clock is hidden'}
        </p>
        <div className="button-container">
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
      </div>
    );
  }
}

export default App;
