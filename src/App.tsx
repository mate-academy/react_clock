/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible } = this.state;
    const { clockName } = this.state;

    return (
      <>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.round(Math.random() * 100) + 1 });
          }}
        >
          Set random name
        </button>

        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock name={clockName} />) }
        </p>
      </>
    );
  }
}
