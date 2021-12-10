import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 1,
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
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    return (
      <div className="clock-container">
        <div className="clock">
          <h1 className="clock__title">
            React clock
          </h1>

          <h3 className="clock__subtitle">
            Current time:
          </h3>

          { this.state.isClockVisible && <Clock name={this.state.clockName} /> }

          <button
            className="button"
            type="button"
            onClick={this.showClock}
          >
            show clock
          </button>

          <button
            className="button"
            type="button"
            onClick={this.hideClock}
          >
            hide clock
          </button>

          <button
            className="button"
            type="button"
            onClick={this.setRandomName}
          >
            set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
