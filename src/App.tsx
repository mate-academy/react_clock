import React, { Component } from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.startNameUpdateTimer();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    this.clearNameUpdateTimer();
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false }, this.clearNameUpdateTimer);
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true }, this.startNameUpdateTimer);
  };

  startNameUpdateTimer = () => {
    this.clearNameUpdateTimer();
    this.timerId = window.setInterval(this.updateClockName, 3300);
  };

  clearNameUpdateTimer = () => {
    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = undefined;
    }
  };

  updateClockName = () => {
    const newName = getRandomName();

    this.setState({ clockName: newName });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} hasClock={this.state.hasClock} />
        )}
      </div>
    );
  }
}

export default App;
