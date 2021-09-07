import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

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
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible } = this.state;
    const clock = isClockVisible && <Clock name={this.state.clockName} />;

    return (
      <div className="App">
        {`React clock ${this.state.clockName}`}
        {clock}

        <button
          type="button"
          className="App__button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

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
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}
