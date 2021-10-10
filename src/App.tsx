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
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName}`}</h1>
        <p className="clockStyle">
          Current time:
          {' '}
          {isClockVisible && <Clock clockName={clockName} />}
        </p>
        <div className="buttonsWrap">
          <button
            type="button"
            onClick={this.hideClock}
            className="buttonStyle"
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={this.showClock}
            className="buttonStyle"
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.setRandomName}
            className="buttonStyle"
          >
            Random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
