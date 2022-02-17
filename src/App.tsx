import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  name: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: 0,
  };

  render() {
    const { isClockVisible, name } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const clockName = () => {
      this.setState({ name: Math.floor(Math.random() * 100) });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={clockName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={name} />}
      </div>
    );
  }
}

export default App;
