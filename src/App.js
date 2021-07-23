import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockVisible: true,
    clockName: 'clock',
  }

  visibilityOn = () => {
    this.setState({
      clockVisible: true,
    });
  }

  visibilityOff = () => {
    this.setState({
      clockVisible: false,
    });
  }

  randomNameForClock = () => {
    const name = Math.ceil(Math.random() * 10);

    this.setState({
      clockName: name,
    });
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
        { this.state.clockVisible && <Clock clockName={this.state.clockName} />}
      </>
    );
  }
}

export default App;
