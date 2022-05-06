// import React, { Component, Props } from 'react';
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        {isClockVisible && (<Clock clockName={clockName} />)}

        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.changeName}
            disabled={!isClockVisible}
          >
            Rename clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
