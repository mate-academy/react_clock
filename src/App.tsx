import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.random() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="clock">
        <h1 className="clock__title">React clock</h1>
        <div className="clock__buttons">

          <button
            className="clock__button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            className="clock__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            className="clock__button"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>

        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
