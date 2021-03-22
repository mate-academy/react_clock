import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  generateName = () => this.setState(
    { clockName: Math.ceil(Math.random() * 1000) },
  );

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && <Clock name={this.state.clockName} />}

        <button
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          SHOW
        </button>

        <button
          type="button"
          onClick={() => {
            this.hideClock();
          }}
        >
          HIDE
        </button>

        <button
          type="button"
          onClick={() => {
            this.generateName();
          }}
        >
          GENERATE NEW NAME
        </button>
      </div>
    );
  }
}

export default App;
