import React from 'react';
import './App.scss';
import { Clock } from './components';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  nameGenerator = () => {
    const numberRandom = Math.round(Math.random() * 1000);

    this.setState({ clockName: numberRandom });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`Clock Name: ${this.state.clockName}`}</p>
        <p>
          <strong>Current time:</strong>
          {' '}
          {this.state.isClockVisible
            && (
              <Clock name={this.state.clockName} />
            )}
        </p>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.showClock}
            className="App__button App__button--first"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="App__button"
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.nameGenerator}
            className="App__button"
          >
            Name generator
          </button>
        </div>
      </div>
    );
  }
}

export default App;
