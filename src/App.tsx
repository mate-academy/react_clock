import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 1000),
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
      clockName: Math.floor(Math.random() * 1000),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="app">
        <div className="app__frame">
          <h1 className="app__clock-name">
            {`Clock name: ${clockName}`}
          </h1>

          <div className="app__action">
            <button
              className="app__button"
              type="button"
              onClick={this.showClock}
            >
              Show Clock
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.renameClock}
            >
              Rename clock
            </button>
          </div>

          {isClockVisible
            ? (
              <span className="app__time-digits">
                <Clock name={clockName} />
              </span>
            )
            : (
              <h3 className="app__time-text">
                &#129045; click &quot;Show Clock&quot;
              </h3>
            )}
        </div>
      </div>
    );
  }
}
