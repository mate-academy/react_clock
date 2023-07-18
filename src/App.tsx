import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.showClock.bind(this));
    document.addEventListener('contextmenu', this.hideClock.bind(this));

    this.timerId = window.setInterval(() => {
      this.setState((prev) => ({
        ...prev,
        clockName: getRandomName(),
      }));
    }, 3000);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
    window.clearInterval(this.timerId);
  }

  showClock(event: MouseEvent) {
    event.preventDefault();

    this.setState((prev) => ({
      ...prev,
      hasClock: true,
    }));
  }

  hideClock(event: MouseEvent) {
    event.preventDefault();

    this.setState((prev) => ({
      ...prev,
      hasClock: false,
    }));
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
