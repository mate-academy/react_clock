import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 11,
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="page">
        <div className="clook">
          <div className="clock__info">
            <h1>React clock</h1>
            <span>
              Clook
              {clockName}
            </span>
            <span>
              Current time:
            </span>
            <span>
              {isClockVisible && <Clock name={clockName} />}
            </span>
          </div>
          <div className="clock__nav">
            <button
              type="button"
              className="clock--visible"
              onClick={() => this.setState({ isClockVisible: true })}
            >
              Show clock
            </button>
            <button
              type="button"
              className="clock--hidden"
              onClick={() => this.setState({ isClockVisible: false })}
            >
              Hide clock
            </button>
            <button
              type="button"
              className="clock--name"
              onClick={() => this.setState({ clockName: Math.round(Math.random() * 100) })}
            >
              Randomize Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}
