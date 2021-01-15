import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 10),
  }

  setName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
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
    return (
      <div className="App">
        <h1>React clock</h1>
        <button className="clock__btn" type="button" onClick={this.showClock}>
          Show clock
        </button>
        <button className="clock__btn" type="button" onClick={this.hideClock}>
          Hide clock
        </button>
        <button className="clock__btn" type="button" onClick={this.setName}>
          Set random name
        </button>
        {
          this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            : <></>
        }
      </div>
    );
  }
}

export default App;
