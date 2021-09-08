import React from 'react';
import { Clock } from './Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomName = () => {
    const oldClockName = this.state.clockName;

    this.setState({ clockName: Math.ceil(Math.random() * 10) });

    // eslint-disable-next-line no-console
    setTimeout(() => console.log(`The Clock was renamed from ${oldClockName} to ${this.state.clockName}`), 0);
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const { showClock, hideClock, setRandomName } = this;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="buttons">
          <button
            type="button"
            className="button button-show"
            onClick={showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            className=" button button-hide"
            onClick={hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="button-name"
            onClick={setRandomName}
          >
            Set random name
          </button>
        </div>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}
