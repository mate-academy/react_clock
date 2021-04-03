import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: '',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  generateRandomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App box">
          <h1 className="title is-2 centered is-spaced">React clock</h1>
          <p className="subtitle is-3 centered">
            Current time:
            {isClockVisible && <Clock name={clockName} />}
          </p>
          <div className="container">
            <button
              type="button"
              className="button is-medium is-rounded is-primary"
              onClick={this.showClock}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="button is-medium is-rounded is-danger"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
            <button
              type="button"
              className="button is-medium is-rounded is-info"
              onClick={this.generateRandomName}
            >
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}
