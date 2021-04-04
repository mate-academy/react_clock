import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 21),
  }

  componentDidUpdate(_, prev) {
    if (prev.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`
        The Clock was renamed from ${prev.clockName} to ${this.state.clockName}
      `);
    }
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

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 21),
    });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
        <p><strong>{`Clock name: ${clockName}`}</strong></p>
      </>
    );
  }
}
