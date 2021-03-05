import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  }

  setRandomName() {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  }

  showCLock() {
    this.setState({ isClockVisible: true });
  }

  hideClock() {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.isClockVisible ? (
            <button
              type="button"
              onClick={() => this.hideClock()}
            >
              Hide Clock
            </button>
          )
            : (
              <button
                type="button"
                onClick={() => this.showCLock()}
              >
                Show Clock
              </button>
            )
        }

        <button
          type="button"
          onClick={() => this.setRandomName()}
        >
          Set random name
        </button>
        {
          this.state.isClockVisible && (
            <Clock clockName={this.state.clockName} />
          )
        }
      </div>
    );
  }
}

export default App;
