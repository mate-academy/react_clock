import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
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
      clockName: Math.floor(Math.random() * 101),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React clock
        </h1>

        <div className="clock">
          {isClockVisible && <Clock name={clockName} />}

          <div className="clock__buttons">
            <button
              className="clock__button"
              type="button"
              onClick={this.showClock}
            >
              Show clock
            </button>

            <button
              className="clock__button"
              type="button"
              onClick={this.hideClock}
            >
              Hide clock
            </button>

            <button
              className="clock__button"
              type="button"
              onClick={this.renameClock}
            >
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
