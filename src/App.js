import React from 'react';
import { Clock } from './components/Clock';
import './app.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button
          className="app__button app__show-button"
          onClick={this.showClock}
          type="button"
        >
          Show Clock
        </button>
        <button
          className="app__button app__hide-button"
          onClick={this.hideClock}
          type="button"
        >
          Hide Clock
        </button>
        <button
          className="app__button app__change-button"
          onClick={this.changeName}
          type="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}
