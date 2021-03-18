import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isVisible: false,
    name: 1,
  };

  showTime = () => {
    this.setState({
      isVisible: true,
    });
  };

  hide = () => {
    this.setState({
      isVisible: false,
    });
  };

  generateRandomNumber = () => {
    this.setState({
      name: (Math.random() * 10).toFixed(0),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.isVisible ? <Clock name={this.state.name} /> : null}
        <div className="App__buttons">
          <button
            type="submit"
            onClick={this.showTime}
          >
            Show Time
          </button>
          <button
            type="submit"
            onClick={this.hide}
          >
            Hide Time
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
