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
    clockName: Math.floor(Math.random() * 100),
  };

  render() {
    const { isClockVisible } = this.state;

    const randomName = () => {
      this.setState({
        clockName: Math.floor(Math.random() * 100),
      });
    };

    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            randomName();
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}
