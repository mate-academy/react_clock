import React from 'react';
import './App.scss';

import Clock from './components/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          type="button"
          className="App__button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}
