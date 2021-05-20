import React from 'react';

import './App.scss';
import Clock from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
