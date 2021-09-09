import React from 'react';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  randomName: number,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    randomName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({
      randomName: Math.ceil(Math.random() * 10),
    });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        {`React clock ${this.state.randomName}`}

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
          Set random name
        </button>

        {isClockVisible && (
          <Clock name={this.state.randomName} />
        )}
      </div>
    );
  }
}
