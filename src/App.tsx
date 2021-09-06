import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  randomName = () => {
    const prevName = this.state.clockName;

    this.setState({ clockName: Math.ceil(Math.random() * 5) });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${this.state.clockName}`)
    }, 0);
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="clock">
        <h1>React clock</h1>

        <button
          className="clock__button"
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          className="clock__button"
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          className="clock__button"
          type="button"
          onClick={this.randomName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
