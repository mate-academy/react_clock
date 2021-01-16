import React from 'react';
import { Clock } from './Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>A Clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <div>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => {
              if (isClockVisible) {
                this.setState({
                  clockName: Math.round(Math.random() * 1000),
                });
              }
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
