import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

export interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    this.timerId();
  }

  timerId() {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
        && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
