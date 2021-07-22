import React from 'react';

import './App.scss';
import { Clock } from './components';
import { Button } from './components/Button';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  setClockName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10000) });
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
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <div className="button-container">
          <Button
            onClick={this.showClock}
            text="Show me!"
          />
          <Button
            onClick={this.hideClock}
            text="Hide me!"
          />
          <Button
            onClick={this.setClockName}
            text="Wanna New NAME!!!"
          />
        </div>

      </div>
    );
  }
}
