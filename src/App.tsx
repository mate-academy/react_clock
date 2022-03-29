import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

interface State {
  clockName: number;
  isClockVisible: boolean;
}

class App extends React.Component<Props, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  setRandomName = () => this.setState({ clockName: Math.floor(Math.random() * 100) });

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>

        { this.state.isClockVisible
        && <Clock name={this.state.clockName} />}

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
