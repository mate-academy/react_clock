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
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock
          isClockVisible={this.state.isClockVisible}
          name={this.state.clockName}
        />

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
