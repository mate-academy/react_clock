import React from 'react';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
    clockName: 'No name',
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  randomName = () => {
    this.setState({
      clockName: (
        Math.floor(Math.random() * 10).toString()
      ),
    });
  };

  render() {
    const { isVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        <h3>
          {isVisible && (
            <Clock name={clockName} />
          )}
        </h3>

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
          onClick={this.randomName}
        >
          Set random name
        </button>

      </div>
    );
  }
}
