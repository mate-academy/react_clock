import React, { Component } from 'react';
import './App.scss';

function getRandomName() {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
  time: string;
}

class App extends Component<{}, State> {
  private timerId: number | null = null;
  private nameInterval: number | null = null;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);

    this.nameInterval = window.setInterval(() => {
      const newName = getRandomName();
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${this.state.clockName} to ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
    if (this.nameInterval) {
      window.clearInterval(this.nameInterval);
    }
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>
            {' time is '}
            <span className="Clock__time">{this.state.time}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;