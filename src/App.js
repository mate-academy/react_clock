import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  changeName = () => {
    const randomNum = Math.floor(Math.random() * (1000 - 1)) + 1;

    this.setState({ clockName: randomNum });

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.clockName} to ${randomNum}`);
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App__clock">
          Current time:
          {' '}
          {isClockVisible && <Clock name={this.state.clockName} />}
        </div>
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
        <button type="button" onClick={this.changeName}>Set random name</button>
      </div>
    );
  }
}

export default App;
