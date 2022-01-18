import React from 'react';
import { Clock } from './Clock/Clock';

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: false,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          <button type="button" onClick={this.showClock}>
            Show Clock
          </button>

          <button type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
          <br />
          <br />

          Current time:
          {this.state.isClockVisible ? <Clock /> : null}
        </p>
      </div>
    );
  }
}

export default App;
