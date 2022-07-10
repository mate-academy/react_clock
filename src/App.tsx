/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  nameClock: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    nameClock: 0,
  };

  componentDidMount() {

  }

  visibleClock = () => {
    this.setState({ hasClock: true });
  };

  hiddenClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <div className="App__name">
          Name is:
          {getRandomName()}
        </div>
        <div className="App__timer">
          {this.state.hasClock && <Clock name={this.state.nameClock} />}
        </div>

        <div className="button__container">
          <button
            type="button"
            onClick={this.visibleClock}
            className="App__button App__button-1"
          >
            Start timer
          </button>

          <button
            type="button"
            onClick={this.hiddenClock}
            className="App__button App__button-2"
          >
            Finish timer
          </button>
        </div>
      </div>
    );
  }
}

export default App;
