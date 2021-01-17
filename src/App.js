import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 100),
  };

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      if (this.state.isClockVisible) {
        // eslint-disable-next-line
        console.log(date.toLocaleTimeString());
      }
    }, 1000);
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

  randomSetName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
  };

  render() {
    const visible = this.state.isClockVisible;
    const { showClock, hideClock, randomSetName } = this;

    return (
      <div className="app">
        <h1 className="title">React clock</h1>
        <p>
          {visible && <Clock name={this.state.clockName} />}
        </p>
        <button
          className="clock show-clock"
          type="button"
          onClick={showClock}
        >
          Show clock
        </button>
        <button
          className="clock hide-clock"
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>
        <button
          className="clock set-clock"
          type="button"
          onClick={randomSetName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
