import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

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

    this.setState(oldName => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName.clockName} to ${randomName}`);

      return { clockName: randomName };
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App container">
        <h1>React clock</h1>
        <div>
          <div>
            {isClockVisible
              && <Clock clockName={clockName} />}
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.showClock}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="btn btn-primary"
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
