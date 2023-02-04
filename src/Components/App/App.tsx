import React from 'react';

import { Clock } from '../Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });

    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', (event) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>

    );
  }
}
