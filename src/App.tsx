import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  isClockVisible: boolean,
  clockName?: string,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => (
    this.setState({ isClockVisible: true })
  );

  hideClock = () => (
    this.setState({ isClockVisible: false })
  );

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="app">
        <h2 className="app__clock">
          Current time:
          {isClockVisible && <Clock />}
        </h2>
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show Clock
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
