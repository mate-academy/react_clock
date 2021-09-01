import React from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
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

  newClockName = () => {
    const randomName = Math.floor(Math.random() * 101);

    this.setState({ clockName: randomName });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <article className="clock">
          <h1>
            React clock
            {' '}
            {clockName}
          </h1>
          <div className="clock__display">
            <span className="clock__display-title">
              Current time:
            </span>
            <span className="clock__display-time">
              {isClockVisible && <Clock name={clockName} />}
            </span>
          </div>

          <div className="clock__buttons">
            <button
              className="clock__button"
              type="button"
              onClick={this.showClock}
            >
              Show clock
            </button>

            <button
              className="clock__button"
              type="button"
              onClick={this.hideClock}
            >
              Hide clock
            </button>

            <button
              className="clock__button"
              type="button"
              onClick={this.newClockName}
            >
              New name
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
