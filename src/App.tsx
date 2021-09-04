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
    const usedName = this.state.clockName;

    this.setState({ clockName: Math.round(Math.random() * 1000) });

    setTimeout(() => {
      console.log(`The Clock was renamed from ${usedName} to ${this.state.clockName}`);
    }, 0);
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
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
      </div>
    );
  }
}

export default App;
