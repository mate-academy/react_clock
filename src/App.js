import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 1,
  };

  showTime = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideTime = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  generateRandomNumber = () => {
    this.setState({
      clockName: (Math.random() * 10).toFixed(0),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.isClockVisible
          ? <Clock name={this.state.clockName} /> : null}
        <div className="App__buttons">
          <button
            type="submit"
            onClick={this.showTime}
          >
            Show Time
          </button>
          <button
            type="submit"
            onClick={this.hideTime}
          >
            hide Time
          </button>
          <button
            type="submit"
            onClick={this.generateRandomNumber}
          >
            Set Random Name
          </button>
        </div>
      </div>
    );
  }
}
