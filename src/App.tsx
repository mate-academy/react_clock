import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/index';
import { State } from './types/State';

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setClockName = () => {
    this.setState({ clockName: Math.round(Math.random() * 10) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          {`React Clock ${clockName}`}
        </h1>
        <p className="text">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <div className="container">
          <button className="show-button" type="button" onClick={this.showClock}>
            Show Clock
          </button>

          <button className="hide-button" type="button" onClick={this.hideClock}>
            Hide Clock
          </button>

          <button className="random-button" type="button" onClick={this.setClockName}>
            Random name
          </button>
        </div>
      </div>
    );
  }
}
