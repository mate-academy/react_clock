import { Component } from 'react';
import './App.scss';
import Clock from './Clock/Clock';

type State = {
  isClockVisible?: boolean;
  clockName?: number;
};

type Props = {};

class App extends Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  randomName = () => {
    const newName = Math.floor(Math.random() * 100) + 1;

    this.setState({
      clockName: newName,
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div data-cy="time">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </div>
        <button
          type="button"
          onClick={this.showClock}
          disabled={isClockVisible}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          disabled={!isClockVisible}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.randomName}
          disabled={!isClockVisible}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
