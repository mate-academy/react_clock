import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  name: number,
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    name: 0,
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({
      name: Math.ceil(Math.random() * 10),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {this.state.isClockVisible && (
            <Clock name={this.state.name} />
          )}
        </p>
        <button
          onClick={() => this.hideClock()}
          type="button"
        >
          Hide Clock
        </button>
        <button
          onClick={this.showClock}
          type="button"
        >
          Show Clock
        </button>
        <button
          onClick={() => this.randomName()}
          type="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
