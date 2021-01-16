import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: Math.round(Math.random() * 100),
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({
        isClockVisible: true,
      });
    };

    const hideClock = () => {
      this.setState({
        isClockVisible: false,
      });
    };

    const randomNumber = () => {
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
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <button type="button" onClick={showClock}>
          Show Clock
        </button>

        <button type="button" onClick={hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={randomNumber}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
