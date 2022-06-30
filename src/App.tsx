import React from 'react';
import Clock from './Clock';

import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 1000) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="clock">
          <h1 className="title">
            Clock
            {' '}
            {clockName}
          </h1>

          <p data-cy="time">
            Current time:
            {' '}
            {isClockVisible && <Clock name={clockName} />}
          </p>
        </div>

        <div className="buttons">
          <button
            type="button"
            disabled={isClockVisible}
            onClick={this.showClock}
          >
            Show clock
          </button>

          <button
            type="button"
            disabled={!isClockVisible}
            onClick={this.hideClock}
          >
            Hide clock
          </button>

          <button
            type="button"
            disabled={!isClockVisible}
            onClick={this.setRandomName}
          >
            Set a random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
