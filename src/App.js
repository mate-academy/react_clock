import React from 'react';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.floor((Math.random() * 100) + 1),
    });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={this.state.clockName} />}
        </p>

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
