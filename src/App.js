import React from 'react';
import { Clock } from './Components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 100),
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible
        && <Clock name={this.state.clockName} />
        }

        <button type="button" onClick={this.showClock}>
          Show
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide
        </button>

        <button type="button" onClick={this.randomName}>
          Random
        </button>
      </div>
    );
  }
}

export default App;
