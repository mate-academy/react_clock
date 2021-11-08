import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type AppState = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, AppState> {
  state = {
    isClockVisible: true,
    clockName: 120,
  };

  // showClock() {
  //   this.setState({ isClockVisible: true });
  // }

  // hideClock() {
  //   this.setState({ isClockVisible: false });
  // }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 120),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && <Clock clockName={this.state.clockName} />}

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.setRandomName}>
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
