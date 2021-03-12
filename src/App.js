import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 33,
  }

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => (
              this.setState({ clockName: Math.ceil(Math.random() * 100) })
            )}
          >
            Set random name
          </button>
        </p>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
