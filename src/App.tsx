import React from 'react';
import './App.scss';
import { Clock } from './Components';

type Props = {};
type State = {
  isClockVisible: boolean,
  clockName: number,
};
class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomClockName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
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
          onClick={this.randomClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
