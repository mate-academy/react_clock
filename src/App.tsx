import React from 'react';
import CLock from './Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock&nbsp;
          {clockName}
        </h1>
        <button
          type="button"
          disabled={isClockVisible}
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          disabled={!isClockVisible}
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          disabled={!isClockVisible}
          onClick={this.randomName}
        >
          Rename
        </button>
        <p>
          Current time:
          {' '}
          {isClockVisible && <CLock name={clockName} />}
        </p>
      </div>
    );
  }
}

export default App;
