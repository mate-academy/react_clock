import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
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
    this.setState({ clockName: Math.round(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <div>
            {isClockVisible && <Clock name={clockName} />}
          </div>
          <div className="buttons">
            <button
              type="button"
              className="buttonChange"
              onClick={this.showClock}
            >
              Show clock
            </button>
            <button
              type="button"
              className="buttonChange"
              onClick={this.hideClock}
            >
              Hide clock
            </button>
            <button
              type="button"
              className="buttonRandom"
              onClick={this.setRandomName}
            >
              Random Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
