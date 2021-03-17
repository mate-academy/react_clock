import React from 'react';
import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setName = () => {
    if (!this.state.isClockVisible) {
      return;
    }

    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        <span>
          {
            isClockVisible && <Clock name={clockName} />
          }
        </span>
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>
        <button type="button" onClick={this.setName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
