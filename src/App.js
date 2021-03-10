import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: '1',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    if (!this.state.isClockVisible) {
      return;
    }

    this.setState({ name: (Math.random() * 10).toFixed(0) });
  }

  render() {
    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        {this.state.isClockVisible && (
          <Clock name={this.state.name} />
        )}
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
        <button type="button" onClick={this.changeName}>Set random name</button>
      </div>
    );
  }
}

export default App;
