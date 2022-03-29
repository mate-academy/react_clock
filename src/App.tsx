import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import clockNames from './api/clockNames.json';

interface ClockName {
  id: number;
  name: string;
}

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: clockNames[0].name,
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  getRandomName = (clocks: ClockName[]) => {
    return clocks[Math.floor(Math.random() * clockNames.length)].name;
  };

  renameClock = () => {
    this.setState(
      { clockName: this.getRandomName(clockNames) },
    );
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="clock">
          <div className="clock__body">

            <div className="App__buttons">

              <button
                type="button"
                className="App__button"
                onClick={this.showClock}
              >
                Show
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.renameClock}
              >
                Rename
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.hideClock}
              >
                Hide
              </button>
            </div>
            <div className="clock__face">
              {isClockVisible && <Clock />}
            </div>
            <div className="clock__name">
              {clockName}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
