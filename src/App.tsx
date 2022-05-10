import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number,
  isClockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: Math.floor(Math.random() * 24),
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
      { clockName: Math.floor(Math.random() * 24) },
    );
  };

  render() {
    const {
      clockName,
      isClockVisible,
    } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{`Сlock name is ${clockName}`}</h1>
        {isClockVisible ? (
          <Clock
            name={clockName}
          />
        ) : (
          <div className="Show-container">
            <h1 className="App__title Show-container__title">
              The clock is hidden. Do you want to show it?
            </h1>
            <div>
              <button
                type="button"
                className="App__button App__button-show"
                onClick={this.showClock}
              >
                Show Clock
              </button>
            </div>
          </div>
        )}

        <div className="Hide-container">
          <button
            type="button"
            className="App__button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.randomName}
            disabled={!isClockVisible}
          >
            Set random name (0-24)
          </button>
        </div>
      </div>
    );
  }
}
