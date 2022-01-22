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
        <div className="clockButton-container">
          <button
            className="clockButton"
            type="button"
            onClick={() => {
              this.showClockHandler();
            }}
          >
            Show clock
          </button>
          <button
            className="clockButton"
            type="button"
            onClick={() => {
              this.hideClockHandler();
            }}
          >
            Hide clock
          </button>
          <button
            className="clockButton"
            type="button"
            onClick={() => {
              this.setRandomNameHandler();
            }}
          >
            Set random name
          </button>
        </div>
        {this.state.isClockVisible && <Clock name={this.state.clockName} /> }
      </div>
    );
  }
}

export default App;
