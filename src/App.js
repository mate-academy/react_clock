import React from 'react';
import { Clock } from './Clock';

import './App.scss';

function letRandomName() {
  return Math.random();
}

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        { time: new Date().toLocaleTimeString() },
      );
      if (this.state.isClockVisible) {
        // eslint-disable-next-line
        console.log(this.state.time);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && (
          <Clock
            isClockVisible={this.state.isClockVisible}
            name={this.state.clockName}
            time={this.state.time}
          />
        )}

        <div className="button-block">
          <div className="visablity-buttons">
            <button
              type="button"
              className="changer"
              onClick={
                () => {
                  this.setState(
                    { isClockVisible: true },
                  );
                }
              }
            >
              Show Clock
            </button>

            <button
              type="button"
              className="changer"
              onClick={
                () => {
                  this.setState(
                    { isClockVisible: false },
                  );
                }
              }
            >
              Hide Clock
            </button>
          </div>

          <button
            type="button"
            className="random-button"
            onClick={
              () => {
                this.setState(
                  { clockName: letRandomName() },
                );
              }
            }
          >
            Random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
