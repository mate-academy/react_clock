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

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const randomName = Math.ceil(Math.random() * 100);

    this.setState(prevName => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName.clockName} to ${randomName}`);

      return { clockName: randomName };
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <p>
            {isClockVisible
              && <Clock clockName={clockName} />}
          </p>
          <div className="buttons">
            <button
              type="button"
              className="button"
              onClick={this.showClock}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="button"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="button"
              onClick={this.setRandomName}
            >
              Random Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}
