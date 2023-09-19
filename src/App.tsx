import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  time = new Date();

  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    window.clearInterval(this.timerId);
  }

  showClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: true,
    }));
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: false,
    }));
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
