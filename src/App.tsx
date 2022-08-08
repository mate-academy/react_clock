import React from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  handleChangeClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClockTurnOff);
    document.addEventListener('click', this.handleClockTurnOn);
    this.handleChangeClockName = window
      .setInterval(this.handleClockName, 3300);

    if (!this.state.hasClock) {
      window.clearInterval(this.handleChangeClockName);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClockTurnOff);
    document.removeEventListener('click', this.handleClockTurnOn);
    window.clearInterval(this.handleChangeClockName);
  }

  handleClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleClockTurnOff = () => {
    this.setState({ hasClock: false });
  };

  handleClockTurnOn = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
