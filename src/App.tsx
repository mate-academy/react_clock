import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomNameHandler() {
    this.setState({ clockName: Math.random() });
  }

  showClockHandler() {
    this.setState({ isClockVisible: true });
  }

  hideClockHandler() {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.showClockHandler();
          }}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.hideClockHandler();
          }}
        >
          Hide clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setRandomNameHandler();
          }}
        >
          Set random name
        </button>
        {this.state.isClockVisible && <Clock name={this.state.clockName} /> }
      </div>
    );
  }
}

export default App;
