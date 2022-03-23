import React from 'react';
import { Clock } from './components/Clock';

import Colors from './api/Colors.json';

import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const { hex } = Colors[clockName];

    return (
      <div className="App">
        <div
          className="clock App__clock"
          style={{ color: hex }}
        >
          <h2 className="clock__title">react clock</h2>
          {isClockVisible && <Clock name={clockName} />}
          <div className="button-container clock__button-container">
            <button
              type="button"
              className="button button-container__button"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show clock
            </button>
            <button
              type="button"
              className="button button-container__button"
              onClick={() => {
                this.setState({ clockName: Math.floor(Math.random() * 6) });
              }}
            >
              Set random name
            </button>
            <button
              type="button"
              className="button button-container__button"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}
