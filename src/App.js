import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockVisible: true,
    // eslint-disable-next-line react/no-unused-state
    clockName: 'clock',
  }

  visibilityOn = () => {
    this.setState(() => ({
      clockVisible: true,
    }));
  }

  visibilityOff = () => {
    this.setState(() => ({
      clockVisible: false,
    }));
  }

  randomNameForClock = () => {
    const name = Math.ceil(Math.random() * 10);

    this.setState(() => ({
      // eslint-disable-next-line react/no-unused-state
      clockName: name,
    }));
  }

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.visibilityOn}
        >
          turn on clock
        </button>

        <button
          type="button"
          onClick={this.visibilityOff}
        >
          turn off clock
        </button>
        <button
          type="button"
          onClick={this.randomNameForClock}
        >
          Set random name
        </button>
        { this.state.clockVisible && <Clock name={this.state} />}
      </>
    );
  }
}

export default App;
