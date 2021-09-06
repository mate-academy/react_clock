import React from 'react';
import { Clock } from './component/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changeClockName = () => {
    if (this.state.isClockVisible) {
      this.setState({ clockName: Math.round(Math.random() * 100) });
    }
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`Random name: ${this.state.clockName}`}</p>
        {isClockVisible && <Clock clockName={clockName} />}
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.changeClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
