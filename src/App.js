import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h3 className="reactClock">React clock</h3>
        <div className="clock">
          {isClockVisible && (
            <Clock name={clockName} />)}
        </div>
        <div>
          <button
            className="button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="button"
            type="button"
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
