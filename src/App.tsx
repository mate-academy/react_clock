import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>

        {isClockVisible && <Clock clockName={clockName} />}

        <div className="buttons">
          <button
            className="button buttons__hide-clock"
            type="button"
            disabled={!isClockVisible}
            onClick={this.hideClock}
          >
            Hide clock
          </button>

          <button
            className="button buttons__show-clock"
            type="button"
            disabled={isClockVisible}
            onClick={this.showClock}
          >
            Show clock
          </button>

          <button
            className="button butons__changeName"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>

        <div className="clock-name">
          <p>{`Clock name is: ${clockName}`}</p>
        </div>
      </div>
    );
  }
}

export default App;
