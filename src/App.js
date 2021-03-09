import React from 'react';

import './App.scss';
import { Clock } from './Components/Clock/CLock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: '',
  }

  showClock = () => this.setState({ isClockVisible: true })

  hideClock = () => this.setState({ isClockVisible: false })

  changeName = () => {
    this.setState({ clockName: Math.trunc((Math.random() * 10)) });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {
          `React clock ${this.state.clockName}`
          }
        </h1>
        {this.state.isClockVisible && (
        <Clock name={this.state.clockName} />
        )}
        <button type="button" onClick={this.showClock}>Show</button>
        <button type="button" onClick={this.hideClock}>Hide</button>
        <button type="button" onClick={this.changeName}>Random name</button>
      </div>
    );
  }
}

export default App;
