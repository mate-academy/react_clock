import React, { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 1000101,
  };

  render() {
    return (
      <div className="container">
        {this.state.isClockVisible
          ? <Clock clockName={this.state.clockName} />
          : <h1 className="destroyed">Clock was Destroyed</h1>}
        <div className="btn-container">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => {
              const newClockName = +Math.floor(Math.random() * 100).toString(2);

              this.setState({ clockName: newClockName });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
