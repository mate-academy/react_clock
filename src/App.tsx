import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" className="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" className="button" onClick={this.hideClock}>
          Hide clock
        </button>

        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}

export default App;
