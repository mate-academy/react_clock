import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { names } from './api/clockNames';

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: names[0],
    isClockVisible: true,
  };

  getRandomName = (clockNames: string[]) => {
    const randomIndex = Math.floor(Math.random() * clockNames.length);

    return clockNames[randomIndex];
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <h1>
            React clock
          </h1>
          {isClockVisible && <Clock name={clockName} />}
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={this.showClock}
            >
              Show clock
            </button>
            <button
              className="App__button"
              type="button"
              onClick={() => {
                this.setState({ clockName: this.getRandomName(names) });
              }}
            >
              Set random name
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.hideClock}
            >
              Hide clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}
