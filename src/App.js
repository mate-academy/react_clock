import React from 'react';

import './App.scss';
import { Clock } from './component/Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  toggleClock = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  randomName = () => {
    this.setState((prevName) => {
      const newName = Math.floor(Math.random() * 10000);

      // eslint-disable-next-line no-console
      console.log(`
        The Clock was renamed from ${prevName.clockName} to ${newName}
      `);

      return {
        clockName: newName,
      };
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div>
        <h1>
          React ClockName:
          {clockName}
        </h1>

        {
          isClockVisible && (
            <Clock name={clockName} />
          )
        }

        <button
          type="button"
          onClick={this.toggleClock}
        >
          {
            isClockVisible ? 'Hide Clock' : 'Show Clock'
          }
        </button>

        <button
          type="button"
          onClick={this.randomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
