import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

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

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    // this code stops the timer
    this.setState({ hasClock: false });
    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

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
