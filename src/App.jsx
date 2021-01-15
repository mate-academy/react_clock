import React from 'react';

import './App.scss';

import Clock from './components/Clock';
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

  randomName = () => {
    this.setState({ clockName: Math.random() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time: {isClockVisible && (<Clock name={clockName} />)}
        </p>

        <div className="App__buttons">
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={this.randomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
