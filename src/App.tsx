import React, { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: string | number,
};

class App extends Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Magic clock',
  };

  componentDidUpdate(_prevState: {}, prevProps: State) {
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.state.clockName}`);
  }

  getChangedFalse = () => {
    this.setState({ isClockVisible: false });
  };

  getChangedTrue = () => {
    this.setState({ isClockVisible: true });
  };

  getRandomName = () => {
    const newName = Math.floor(Math.random() * 100);

    this.setState({ clockName: newName });
    // eslint-disable-next-line
    console.log(this.state.clockName)
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Clock</h1>
        <div className="app__box">
          {isClockVisible && (
            <Clock name={clockName} />
          )}
          <div className="app__buttons">
            <button className="app__button" type="button" onClick={this.getChangedTrue}>
              Show clock
            </button>
            <button className="app__button app__button--disable" type="button" onClick={this.getChangedFalse}>
              Hide clock
            </button>
            <button className="app__button" type="button" onClick={this.getRandomName}>
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
