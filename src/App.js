import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { clockName } = prevState;

    if (this.state.clockName !== clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setRandomName = () => {
      this.setState({ clockName: Math.floor(Math.random() * 100) });
    };

    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {clockName}
        </h1>

        <p>
          Current time:
          {' '}
          {isClockVisible && (<Clock />)}
        </p>

        <button
          className="button"
          type="button"
          onClick={showClock}
        >
          Show Clock
        </button>

        <button
          className="button button_hide"
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>

        <button
          className="button button_set"
          type="button"
          onClick={setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
