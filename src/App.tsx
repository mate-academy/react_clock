import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock.bind(this));
    document.addEventListener('click', this.showClock.bind(this));
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock.bind(this));
    document.removeEventListener('click', this.showClock.bind(this));
  }

  hideClock(event: MouseEvent) {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  showClock(event: MouseEvent) {
    event.preventDefault();
    this.setState({ hasClock: true });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
