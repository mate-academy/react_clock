import React from 'react';
import { Clock } from './Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  createRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: Math.round(Math.random() * 1000),
      });
    }
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="clock__block">
        <h1>React clock</h1>

        { isClockVisible && <Clock name={clockName} /> }

        <div className="buttons">
          <button
            className="show button"
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show Clock
          </button>
          <button
            className="hide button"
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide Clock
          </button>
        </div>

        { isClockVisible && (
          <button
            className="random button"
            type="button"
            onClick={this.createRandomName}
          >
            Set random name
          </button>
        )}
      </div>
    );
  }
}
