import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  };

  changeShowClock = (value: boolean): void => {
    this.setState({ isClockVisible: value });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (<Clock clockName={clockName} />)}
        </p>
        <button
          type="button"
          onClick={() => {
            this.changeShowClock(true);
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.changeShowClock(false);
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.random() });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
