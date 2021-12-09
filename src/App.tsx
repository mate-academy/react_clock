import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {isClockVisible
          && (
            <Clock />
          )}
        </p>
        <div>
          <button
            disabled={!isClockVisible}
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>
          <button
            disabled={isClockVisible}
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>
        </div>
      </div>
    );
  }
}
