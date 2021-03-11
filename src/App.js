import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  setNewClockName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.hideClock();
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setNewClockName();
          }}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
