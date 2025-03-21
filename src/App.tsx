/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class App extends React.Component {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameInterval: number | null = null;

  componentDidMount() {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.nameInterval = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);

    if (this.nameInterval !== null) {
      clearInterval(this.nameInterval);
    }
  }

  updateClockName = () => {
    const newName = getRandomName();

    console.warn(`Renamed from ${this.state.clockName} to ${newName}`);
    this.setState({ clockName: newName });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
