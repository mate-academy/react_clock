import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    //
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
      clockName: Math.round(Math.random() * 1000),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React clock
        </h1>
        <h2 className="App__name">
          Clock name:
          {' '}
          {clockName}
        </h2>
        <div className="App__time">
          {isClockVisible
            ? (<Clock name={clockName} />)
            : ('Current time: Ooops... You`ve got to show the clock first!')}
        </div>
        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.renameClock}
            className="App__button"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
