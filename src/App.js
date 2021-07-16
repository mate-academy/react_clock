import React, { Component } from 'react';
import { Clock } from './components/Clock/Clock';
import { Button } from './components/Button/Button';

import './App.scss';

export class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  handleClickOn = () => {
    this.setState({
      isClockVisible: true,
    });
  }

   handleClickOff = () => {
     this.setState({
       isClockVisible: false,
     });
   }

  getRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const gettingClock = this.state.isClockVisible
      ? <Clock name={this.state.clockName} /> : `00:00:00`;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {gettingClock}
        </p>
        <Button
          parentClickOn={this.handleClickOn}
          parentClickOff={this.handleClickOff}
          parentGetRandomName={this.getRandomName}
        />
      </div>
    );
  }
}
