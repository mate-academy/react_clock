import React from 'react';
import { Clock } from './Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      if (!isClockVisible) {
        this.setState({ isClockVisible: true });
      }
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setRandomName = () => {
      this.setState({ clockName: Math.random() * (10 - 1) + 1 });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          {' '}
          {<Clock
            isClockVisible={isClockVisible}
            name={clockName}
          />
          }
        </div>
        <button type="button" onClick={showClock}> Show Clock</button>
        <button type="button" onClick={hideClock}> Hide Clock</button>
        <button type="button" onClick={setRandomName}>Set random name</button>
      </div>
    );
  }
}
