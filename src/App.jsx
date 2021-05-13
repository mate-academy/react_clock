import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 10),
  }

  setVisibleStatus = (status) => {
    this.setState({
      isClockVisible: status,
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
              onClick={() => this.setVisibleStatus(true)}
            >
              show clock
            </button>
          </span>
          <span className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={() => this.setVisibleStatus(false)}
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
