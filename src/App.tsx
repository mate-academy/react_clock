import React from 'react';
import Clock from './Clock';
import './App.scss';

type State = {
  randomNum: number | string;
  isClockVisible: boolean;
};

export default class App extends React.Component<{}, State> {
  state: State = {
    randomNum: '',
    isClockVisible: true,
  };

  showClock = () => {
    this.setState(({ isClockVisible }) => ({
      isClockVisible: !isClockVisible,
    }));
  };

  hideClock = () => {
    this.setState(({ isClockVisible }) => ({
      isClockVisible: !isClockVisible,
    }));
  };

  setRandomNumber = () => {
    const number = Math.floor(Math.random() * 1000);

    this.setState({
      randomNum: number,
    });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="main">
        <h1 className="title">
          React clock
          {' '}
          {this.state.randomNum}
        </h1>

        {isClockVisible && <Clock date={new Date()} />}

        <button
          type="button"
          className="button btn btn-outline-info"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="button btn btn-outline-info"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="button btn btn-outline-info"
          onClick={this.setRandomNumber}
        >
          Set random number
        </button>
      </div>
    );
  }
}
