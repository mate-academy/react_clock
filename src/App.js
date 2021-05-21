import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

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
    this.setState({ clockName: Math.floor(Math.random() * 10) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <div className="app__timer">
          Current time:
          {isClockVisible ? <Clock name={clockName} /> : ''}
        </div>
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
