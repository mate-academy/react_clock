import React from 'react';

import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = (): void => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState(
      { isClockVisible: false },
    );
  };

  createRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: Math.round(Math.random() * 100),
      });
    }
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>

        {isClockVisible && <Clock name={clockName} />}
        {!isClockVisible && (
          <button
            className="App__button App__button--main"
            type="button"
            onClick={() => this.showClock()}
          >
            Show
          </button>
        )}

        {isClockVisible && (
          <button
            className="App__button"
            type="button"
            onClick={() => this.hideClock()}
          >
            Hide
          </button>
        )}

        {isClockVisible && (
          <button
            className="App__button"
            type="button"
            onClick={this.createRandomName}
          >
            Set random name
          </button>
        )}
      </div>
    );
  }
}

export default App;
