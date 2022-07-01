import React from 'react';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  ShowClock = () => {
    this.setState({ isClockVisible: true });
  };

  HideClock = () => {
    this.setState({ isClockVisible: false });
  };

  SetRandomName = () => {
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
              onClick={this.ShowClock}
              disabled={this.state.isClockVisible}
            >
              Show Clock
            </button>

            <button
              className="Clock__btn"
              type="button"
              onClick={this.HideClock}
              disabled={!this.state.isClockVisible}
            >
              Hide Clock
            </button>

            <button
              className="Clock__btn"
              type="button"
              onClick={this.SetRandomName}
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
