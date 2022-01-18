import React from 'react';
import './App.scss';
import { Clock } from './clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>React clock</h1>
        <div>
          Current time:
          {this.state.isClockVisible && <Clock />}
        </div>
        <button type="button" onClick={this.showClock}>Show clock</button>
        <button type="button" onClick={this.hideClock}>Hide clock</button>
      </>
    );
  }
}

export default App;
