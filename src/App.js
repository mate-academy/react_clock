import React from 'react';

import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  changeName = () => {
    const name = Math.floor(Math.random() * 100);

    this.setState({ clockName: name });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <div className="clock">
          {this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            : <span className="clock__text">Clock is hidden</span>
          }
          <div className="clock__buttons">
            <Button text="Show clock" action={this.showClock} />
            <Button text="Hide clock" action={this.hideClock} />
            <Button text="Change name" action={this.changeName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
