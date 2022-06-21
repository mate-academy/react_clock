import React from 'react';
import './App.scss';
import { Clock } from './Clock';

const clockNames = ['Try to stop real time', 'Time in Ukraine', 'Its time to live better life', 'Clock'];

interface State {
  isClockVisible: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Clock',
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(prevProps);
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: clockNames[Math.floor(Math.random() * clockNames.length)] });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>

        <button
          type="button"
          onClick={this.showClock}
          disabled={this.state.isClockVisible}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          disabled={!this.state.isClockVisible}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Random Name
        </button>
      </div>
    );
  }
}
