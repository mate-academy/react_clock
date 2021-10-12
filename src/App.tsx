import React from 'react';
import './App.scss';
import { Clock } from './components/clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 51,
  };

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName}`}</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock clockName={clockName} /> }
        </p>

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
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}
