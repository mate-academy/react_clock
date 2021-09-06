/* eslint-disable no-console */

import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockName: 0,
    isClockVisible: true,
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState((previousState) => {
        const newName = Math.ceil(Math.random() * 100);

        console.log(`The Clock was renamed from ${previousState.clockName} to ${newName}`);

        return {
          clockName: newName,
        };
      });
    }
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const { setRandomName, hideClock, showClock } = this;

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col mx-auto">
            <h1 className="display-1 text-center">
              React clock
            </h1>

            {isClockVisible && <Clock name={clockName} />}

            <div className="buttons d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success"
                onClick={showClock}
              >
                Show Clock
              </button>

              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={hideClock}
              >
                Hide Clock
              </button>

              <button
                type="button"
                className="btn btn-info"
                onClick={setRandomName}
              >
                Set random name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
