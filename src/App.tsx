import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type State = {
  isClockVisible: boolean,
  number: number,
};

const getRandom = ():number => {
  return Math.floor(Math.random() * 100 + 10);
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    number: 2,
  };

  getShowClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  getHideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  getChangeNumber = () => {
    this.setState({
      number: getRandom(),
    });
  };

  render() {
    const { isClockVisible, number } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          { isClockVisible && <Clock name={number} />}
        </div>
        <div>
          <button
            type="button"
            onClick={this.getShowClock}
          >
            ShowClock
          </button>
          <button
            type="button"
            onClick={this.getHideClock}
          >
            HideClock
          </button>
        </div>
        <button
          type="button"
          onClick={this.getChangeNumber}
          disabled={!isClockVisible}
        >
          Get Random Number
        </button>
      </div>
    );
  }
}

export default App;
