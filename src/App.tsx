import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

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

    const setRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 10);

      this.setState({
        clockName: randomNumber,
      });
    };

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock name={clockName} />
        )}

        <button type="button" onClick={showClock}>
          Show Clock
        </button>

        <button type="button" onClick={hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={setRandomNumber}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
