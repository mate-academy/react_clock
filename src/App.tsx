import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  getSomeName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  toggleClock = () => {
    this.setState(({ isClockVisible }) => ({ isClockVisible: !isClockVisible }));
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div>
        <h1>{`React clock ${this.state.clockName}`}</h1>

        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
        <br />

        <button
          type="button"
          onClick={this.toggleClock}
        >
          {isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>
        <br />

        <button
          type="button"
          onClick={() => {
            this.getSomeName();
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}
