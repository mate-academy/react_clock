import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 13,
  };

  renameClock = () => {
    const randomName = Math.trunc(Math.random() * 100);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.clockName} to ${randomName}`);

    this.setState({ clockName: randomName });
  };

  toggleClock = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">Clock</h1>
          <div className="App__clock">
            {isClockVisible
              ? <Clock name={clockName} />
              : (
                <div className="App__text">
                  press
                  <span className="App__span"> show clock</span>
                </div>
              )}
          </div>
          {isClockVisible
            ? (
              <div className="App__list">
                <button
                  className="button"
                  type="button"
                  onClick={this.toggleClock}
                >
                  Hide clock
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={this.renameClock}
                >
                  Change name
                </button>
              </div>
            )
            : (
              <button
                className="button"
                type="button"
                onClick={this.toggleClock}
              >
                Show clock
              </button>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
