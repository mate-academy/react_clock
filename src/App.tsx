import React from 'react';

import Clock from './components/Clock/Clock';

import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

export default class App extends React.Component<{}, State> {
  state:State = {
    isClockVisible: true,
    clockName: 0,
  };

  toggleStatus = () => this.setState(({ isClockVisible }) => ({ isClockVisible: !isClockVisible }));

  setRandomName = () => this.setState({ clockName: Math.round(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    const btnStatus = isClockVisible ? 'Close clock' : 'Open clock';

    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <div className="clock">
          Current time:
          {isClockVisible
        && <Clock name={clockName} />}
        </div>
        <button className="btn btn-status" type="button" onClick={this.toggleStatus}>
          {btnStatus}
        </button>
        <button className="btn btn-random" type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}
