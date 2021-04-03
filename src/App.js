import React from 'react';
import { Clock } from './Component/Clock';

import './app.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 100),
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();
      const { isClockVisible } = this.state;

      if (isClockVisible) {
        // eslint-disable-next-line
        console.log(date.toLocaleTimeString());
      }
    }, 1000);
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
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

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          {isClockVisible && <Clock clockName={clockName} />}
        </p>

        <div className="button">
          <button
            className="button__clock"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>
          <button
            className="button__clock"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
          <button
            className="button__clock"
            type="button"
            onClick={this.setRandomName}
          >
            Random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
