import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button type="button" disabled={!isClockVisible} onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" disabled={isClockVisible} onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.setRandomName}>
          Set name
        </button>
      </div>
    );
  }
}

export default App;
