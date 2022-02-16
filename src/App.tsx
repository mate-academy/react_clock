import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;
    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    return (
      <div className="app">
        <h1>React clock</h1>
        {isClockVisible ? (
          <>
            <button
              type="button"
              className="app__button"
              onClick={hideClock}
            >
              Hide clock
            </button>
            <Clock />
          </>
        ) : (
          <button
            type="button"
            className="app__button"
            onClick={showClock}
          >
            Show clock
          </button>
        )}
      </div>
    );
  }
}

export default App;
