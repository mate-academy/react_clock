import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockName: number;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 0,
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  renameClock = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="clock clock__wrapper">
          <div className="clock__time">
            {isClockVisible && <Clock clockName={clockName} />}
          </div>
          <div className="clock__title-false">
            {isClockVisible || 'Show me the watch 😠'}
          </div>
          <div className="clock__button-wrapper">
            <button
              type="button"
              className="clock__button"
              disabled={isClockVisible}
              onClick={this.showClock}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="clock__button"
              disabled={!isClockVisible}
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
            <button
              type="button"
              className="clock__button"
              onClick={this.renameClock}
            >
              Set Random Name
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
