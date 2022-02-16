import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'test',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 10; i += 1) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    this.setState({ clockName: result });
  };

  render(): React.ReactNode {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button
          type="button"
          className="app__button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="app__button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="app__button"
          onClick={this.changeName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
