/* eslint-disable no-console */
import React from 'react';

import './App.scss';

import Clock from './components/Clock';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate(_, prevState) {
    const { clockName } = this.state;

    if (prevState.clockName !== clockName) {
      console.log(`The Clock was renamed from ${prevState.clockName}
      to ${clockName}.`);
    }
  }

  setName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible ? <Clock name={clockName} /> : 'Clock is hidden'}
        </p>

        <Button action={this.showClock} text="Show Clock" />
        <Button action={this.hideClock} text="Hide Clock" />
        <Button action={this.setName} text="Set new name" />
      </div>
    );
  }
}

export default App;
