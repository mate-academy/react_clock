import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <p className="clock-font">
          {' '}
          {isClockVisible && (
            <Clock
              name={clockName}
              isClockVisible={isClockVisible}
            />
          )}
        </p>
        <div className="button-block">
          <button
            className="ClockButton ClockButton-Show"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            className="ClockButton ClockButton-Hide"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="ClockButton ClockButton-Set"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.round(Math.random() * 100) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
