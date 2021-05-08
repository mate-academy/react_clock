import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    clockName: 'clock',
    isClockVisible: false,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    this.setState({
      clockName: letters[Math.floor(Math.random() * letters.length)],
    });
  };

  render() {
    const {
      clockName,
      isClockVisible,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { isClockVisible
          && (
            <p>
              Current time:
              {' '}
              <Clock
                name={clockName}
                visible={isClockVisible}
              />
            </p>
          )
        }
        <button
          type="button"
          className="btn-show-clock"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="btn-hide-clock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="btn-random-name"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
