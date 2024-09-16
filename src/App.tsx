import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  // const today = new Date();
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  // This code starts a timer
  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
