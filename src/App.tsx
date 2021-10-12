import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {` ${this.state.clockName}`}
        </h1>
        <p className="App__clock">
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>

        <div className="Buttons">
          <button
            className="Button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            className="Button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="Button"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 100) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
