/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  clockName: number;
  isClockVisible: boolean
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  generateClockName = () => {
    const randomNumber = Math.round(Math.random() * 1000);

    this.setState({ clockName: randomNumber });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="Clock">
        <div className="Clock__App">
          <h1>
            {`Clock Name: ${clockName}`}
          </h1>
          <div className="Clock__buttons">
            <button type="button" onClick={this.hideClock}>
              Hide clock
            </button>
            <button type="button" onClick={this.showClock}>
              Show clock
            </button>

            <button type="button" onClick={this.generateClockName}>
              Generate name
            </button>
          </div>
          {isClockVisible && <Clock data-cy="time" name={clockName} />}
        </div>
      </div>
    );
  }
}
export default App;
