import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  randomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const handle = this.state.isClockVisible
      ? <Clock name={this.state.clockName} /> : '';

    return (
      <div className="clock">
        <h1 className="clock__title">
          Current time:
          {' '}
          <span className="time">
            { handle }
          </span>
        </h1>

        <div className="clock__buttons">
          <button
            type="button"
            className="button buttonHide"
            onClick={this.hideClock}
          >
            hide
          </button>

          <button
            type="button"
            className="button buttonShow"
            onClick={this.showClock}
          >
            show
          </button>

          <button
            type="button"
            className="button randomName"
            onClick={this.randomName}
          >
            random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
