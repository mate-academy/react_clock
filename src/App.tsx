import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setHasClock(false);
    });

    window.addEventListener('click', () => {
      this.setHasClock(true);
    });
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  setHasClock = (value: boolean) => {
    this.setState({ hasClock: value });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
