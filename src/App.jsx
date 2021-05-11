import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 10),
  }

  setVisibleStatusTrue = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  setVisibleStatusFalse = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  randomName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 10),
    });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="clock">
        <div className="clock__time">
          {isClockVisible && <Clock name={clockName} />}
        </div>
        <div className="buttons-container">
          <span className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.setVisibleStatusTrue}
            >
              show clock
            </button>
          </span>
          <span className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.setVisibleStatusFalse}
            >
              hide clock
            </button>
          </span>
          <span className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.randomName}
            >
              set random name
            </button>
          </span>

        </div>
      </div>
    );
  }
}

export default App;
