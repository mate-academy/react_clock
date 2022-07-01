import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName}`}</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.floor(Math.random() * 100) });
          }}
        >
          Set name
        </button>
      </div>
    );
  }
}
