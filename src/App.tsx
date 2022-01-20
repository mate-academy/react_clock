import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component <{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        <button
          type="button"
          className="ui inverted green button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          className="ui inverted red button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          className="ui inverted purple button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
        {isClockVisible && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}

export default App;
