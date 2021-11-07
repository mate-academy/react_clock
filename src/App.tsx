import React from 'react';
import './App.scss';
import logo from './logo.svg';

import { Clock } from './components/Clock';

type AppState = {
  clockName: number,
  isClockVisible: boolean,
};

export default class App extends React.Component<{}, AppState> {
  state = {
    isClockVisible: true,
    clockName: 42,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 42),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React Clock</h1>
        <div className="App__image-container">
          <img
            src={logo}
            alt="React Logo"
            className="App__logo"
          />
        </div>
        <div className="App__button-container">
          <button
            className="App__button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}
