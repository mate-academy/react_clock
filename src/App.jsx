import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <div className="timer">
          {this.state.isClockVisible
            ? <Clock {...this.state} />
            : 'Your time is out!'}
        </div>
        <button
          className="button"
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          className="button"
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          className="button"
          type="button"
          onClick={this.changeName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
