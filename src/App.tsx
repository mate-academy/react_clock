import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState(
      { isClockVisible: true },
    );
  };

  hideClock = () => {
    this.setState(
      { isClockVisible: false },
    );
  };

  changeName = () => {
    this.setState(
      { clockName: Math.round(Math.random() * 100) },
    );
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.isClockVisible && <Clock name={this.state.clockName} />}

        <div className="App__buttons">
          <button
            type="button"
            className="App__button App__button--show"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="App__button App__button--hide"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="App__button App__button--changeName"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
