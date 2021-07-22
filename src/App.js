import React from 'react';

import './App.scss';
import { Button } from './components/Button/Button';
import { Clock } from './components/Clock/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  randomClockName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10000) });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">App Time</h1>
        {isClockVisible
          ? <Clock name={clockName} />
          : <p className="App__message">Try to find this Clock</p>
        }
        <div className="App__buttons">
          <Button
            props={this.hideClock}
            text="Hide Clock"
            styles="button__hide"
          />
          <Button
            props={this.showClock}
            text="Show Clock"
            styles="button__show"
          />
          <Button
            props={this.randomClockName}
            text="Change Name"
            styles="button__name"
          />
        </div>
      </div>
    );
  }
}
