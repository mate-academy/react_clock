import React from 'react';
import { Clock } from './Clock';

type State = {
  clockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockVisible: true,
  };

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>
        <div>
          {this.state.clockVisible && <Clock />}
        </div>
      </div>
    );
  }
}
