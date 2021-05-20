import React from 'react';
import Clock from '../Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 47,
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="container">
        <h1 className="title">React clock</h1>
        <div className="buttons__container">
          <button
            type="button"
            onClick={this.showClock}
            className="button"
          >
            Show clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="button"
          >
            Hide clock
          </button>
          <button
            type="button"
            onClick={this.setRandomName}
            className="button"
          >
            Set random name
          </button>
        </div>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
