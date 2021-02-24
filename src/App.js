import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomNumber = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <div className="clock">
            {isClockVisible ? <Clock name={clockName} /> : null}
          </div>
          <div className="show_button">
            <button type="button" onClick={this.showClock}>Show Clock</button>
            <button type="button" onClick={this.hideClock}>Hide Clock</button>
            <button
              type="button"
              onClick={this.setRandomNumber}
            >
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
