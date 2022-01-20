import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  name: number;
};

class App extends React.Component {
  state: State = {
    isClockVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  getRandomName = () => {
    this.setState({ name: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        <p>
          Name:
          {this.state.name}
        </p>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.name} />}
        </p>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide
        </button>

        <button
          type="button"
          onClick={this.getRandomName}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
