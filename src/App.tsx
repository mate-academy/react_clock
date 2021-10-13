import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    isShown: true,
    clockName: 1,
  };

  render() {
    return (
      <div className="App">
        <h1>
          Clock name:
          {` ${this.state.clockName}`}
        </h1>
        <p className="clock-box">
          {this.state.isShown && <Clock name={this.state.clockName} />}
        </p>

        <div className="clock-buttons">
          <button
            className="btn"
            type="button"
            onClick={() => {
              this.setState({ isShown: true });
            }}
          >
            Show Clock
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => {
              this.setState({ isShown: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 1000) });
            }}
          >
            Clock name
          </button>
        </div>
      </div>
    );
  }
}
