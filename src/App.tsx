import React from 'react';
import { Clock } from './components/clock/Clock';

import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  hideMyClock = () => {
    this.setState({ isClockVisible: false });
  };

  showMyClock = () => {
    this.setState({ isClockVisible: true });
  };

  randomizeMyName = () => {
    this.setState({ clockName: Math.random() * 9999 });
  };

  render(): React.ReactNode {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock-box">
          <p className="clock-box__contetn">Current time:</p>
          {isClockVisible && (
            <Clock name={clockName} />)}
        </div>

        <button
          type="button"
          onClick={this.hideMyClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.showMyClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.randomizeMyName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
