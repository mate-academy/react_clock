import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';
import { Buttons } from './components/buttons/buttons';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  randomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const handle = this.state.isClockVisible
      ? <Clock name={this.state.clockName} /> : '';

    return (
      <div className="clock">
        <h1 className="clock__title">
          Current time:
          {' '}
          <span className="time">
            { handle }
          </span>
        </h1>
        <Buttons app={this} />
      </div>
    );
  }
}

export default App;
