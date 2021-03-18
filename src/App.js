import React from 'react';
import './App.scss';
import Clock from './Components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  setRandomName = () => {
    const randomName = Math.random();

    this.setState({
      clockName: randomName,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={this.state.clockName} />}
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
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
