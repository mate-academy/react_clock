import React, { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0', // Initialize with random name
  };

  clockNameTimerId = 0;

  currentTimeTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.clockNameTimerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.clockNameTimerId);
    clearInterval(this.currentTimeTimerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
