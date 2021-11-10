import React from 'react';
import './App.scss';
import { Clock } from './component/Clock/Clock';

type Props = {};

type State = {
  isClockVisible: boolean
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App--clock">
          {this.state.isClockVisible
            ? <Clock />
            : (
              <p>
                &#128580;
              </p>
            )}
        </div>
        <button
          type="button"
          onClick={this.showClock}
          className="button button--1"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          className="button button--2"
        >
          Hide Clock
        </button>
      </div>
    );
  }
}
