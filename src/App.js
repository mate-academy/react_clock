/* eslint-disable no-console */
import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <span className="clock">
            <Clock isClockVisible={isClockVisible} />
          </span>
        </p>

        <button
          type="button"
          onClick={() => {
            if (!isClockVisible) {
              const clock = document.querySelector('.clock');

              clock.hidden = false;
              this.setState({
                isClockVisible: true,
              });
            }
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            if (isClockVisible) {
              const clock = document.querySelector('.clock');

              clock.hidden = true;
              this.setState({
                isClockVisible: false,
              });
            }
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState((prevState) => {
              const newClockName = Math.round(Math.random() * 100);

              // eslint-disable-next-line max-len
              console.log(`The Clock was renamed from ${prevState.clockName} to ${newClockName}`);

              return {
                clockName: newClockName,
              };
            });
          }}
        >
          Set random name
        </button>

      </div>
    );
  }
}

export default App;
