import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<Props, State> {
  state = {
    clockName: Math.floor(Math.random() * 100),
    isClockVisible: true,
  };

  showClock = () => {
    this.setState(
      { isClockVisible: true },
    );
  };

  hideClock = () => {
    this.setState(
      { isClockVisible: false },
    );
  };

  randomName = () => {
    this.setState(
      { clockName: Math.floor(Math.random() * 100) },
    );
  };

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {this.state.clockName}
        </h1>
        {this.state.isClockVisible
        && <Clock clockName={this.state.clockName} />}
        <div className="App__buttons">
          <button
            type="button"
            className="button"
            onClick={this.showClock}
            disabled={this.state.isClockVisible}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="button button--hide"
            onClick={this.hideClock}
            disabled={!this.state.isClockVisible}
          >
            Hide Clock
          </button>
          <button
            className="button button--rename"
            type="button"
            onClick={this.randomName}
          >
            Rename
          </button>
        </div>
      </div>
    );
  }
}

export default App;
