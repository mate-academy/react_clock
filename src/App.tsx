import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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
        <h1 className="app__title">React clock</h1>
        {isClockVisible && (<Clock />)}
        <div className="app__buttons">
          <button
            type="button"
            onClick={showClock}
          >
            Show clock
          </button>

          <button
            type="button"
            onClick={hideClock}
          >
            Hide clock
          </button>
        </div>

      </div>
    );
  }
}

export default App;
