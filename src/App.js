import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate() {
    const showClock = document.getElementById('showClock');
    const hideClock = document.getElementById('hideClock');

    if (this.state.isClockVisible === false) {
      showClock.hidden = false;
      hideClock.hidden = true;
    }

    if (this.state.isClockVisible === true) {
      showClock.hidden = true;
      hideClock.hidden = false;
    }
  }

  render() {
    return (
      <div className="App">
        <h3 className="reactClock">React clock</h3>
        <p className="currentTime">
          Current time:
        </p>
        <div className="clock">
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />)}
        </div>
        <div>
          <button
            className="button"
            type="button"
            id="hideClock"

            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="button"
            type="button"
            id="showClock"
            hidden
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            className="button"
            type="button"
            id="setRandomName"
            onClick={() => {
              this.setState({
                clockName: Math.floor(Math.random() * Math.floor(60)),
              });
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
