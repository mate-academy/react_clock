import React from 'react';
import Clock from './components/Clock/Clock';
import names from './api/names';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Vitalii',
  };

  setRandomName = () => {
    const name = names[Math.floor(Math.random() * (names.length - 1))];

    this.setState({
      clockName: name,
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
