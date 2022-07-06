import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const random = Math.floor(Math.random() * (300 - 1)) + 1;

    this.setState({ clockName: random });
  };

  render() {
    return (
      <div className="App">
        <div className="Clock">
          {this.state.isClockVisible
            && <Clock name={this.state.clockName} />}

          <div className="Clock__buttons">
            <button
              className="Clock__btn"
              type="button"
              onClick={this.showClock}
              disabled={this.state.isClockVisible}
            >
              Show Clock
            </button>

            <button
              className="Clock__btn"
              type="button"
              onClick={this.hideClock}
              disabled={!this.state.isClockVisible}
            >
              Hide Clock
            </button>

            <button
              className="Clock__btn"
              type="button"
              onClick={this.setRandomName}
              disabled={!this.state.isClockVisible}
            >
              Set random name
            </button>
          </div>

        </div>
      </div>
    );
  }
}
