import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: '',
  };

  render() {
    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const generateRandomName = () => {
      this.setState({ clockName: Math.round(Math.random() * 1000) });
    };

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
              onClick={showClock}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="button is-medium is-rounded is-danger"
              onClick={hideClock}
            >
              Hide Clock
            </button>
            <button
              type="button"
              className="button is-medium is-rounded is-info"
              onClick={generateRandomName}
            >
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}
