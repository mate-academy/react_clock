import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: Math.round(Math.random() * 100),
  }

  render() {
    const showClock = () => {
      this.setState({
        isClockVisible: true,
      });
    };

    const hideClock = () => {
      this.setState({
        isClockVisible: false,
      });
      clearInterval();
    };

    const ramdomNumber = () => {
      this.setState({
        clockName: Math.round(Math.random() * 100),
      });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>

        <button type="button" onClick={showClock}>
          Show Clock
        </button>

        <button type="button" onClick={hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={ramdomNumber}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
