import React from 'react';
import './App.css';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppClock {
  clockName:string,
  hasClock: boolean,
}

export class App extends React.Component<{}, AppClock> {
  timerId = 0;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    this.setState({ hasClock: false });
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  showClock = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  hideClock = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock clockName={clockName} /> }
      </div>
    );
  }
}
