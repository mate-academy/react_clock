import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean
  clockName: number
};

export default class App extends React.Component<Props, State> {
  state = {
    isClockVisible: false,
    clockName: -1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    this.setState({ clockName: Math.random() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.renameClock}
        >
          Set random name
        </button>
      </div>
    );
  }
}
