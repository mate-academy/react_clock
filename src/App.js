import React, { Component } from 'react';

import Clock from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  handleShow = () => {
    this.setState({ isClockVisible: true });
  };

  handleHide = () => {
    this.setState({ isClockVisible: false });
  };

  makeRandomName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Date.now() });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`);
    }, 0);
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <button
          type="button"
          className="btn btn-show"
          onClick={this.handleShow}
        >
          Show
        </button>
        <button
          type="button"
          className="btn btn-hide"
          onClick={this.handleHide}
        >
          Hide
        </button>
        <button
          type="button"
          className="btn btn-random-name"
          onClick={this.makeRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
