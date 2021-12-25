/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Clock } from './Clock/Clock';
import './App.scss';

export class App extends React.Component<{}> {
  state = {
    isClockVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  createRandomName = () => {
    this.setState({
      name: Math.round(Math.random() * 100),
    });
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="wrapper">
        <h1>React clock</h1>
        <div className="clockBlock">
          {isClockVisible && <Clock name={name} />}
          <div className="btns">
            <button
              className="btn"
              type="button"
              onClick={this.showClock}
            >
              Show Clock
            </button>
            <button
              className="btn"
              type="button"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
            {isClockVisible && (
              <button
                className="btn"
                type="button"
                onClick={this.createRandomName}
              >
                Set random name
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
