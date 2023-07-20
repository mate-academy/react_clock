import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleDocumentRemoveClock);
    document.addEventListener('click', this.handleDocumentAddClock);
    this.timerId = window.setInterval(() => {
      this.setState((prev) => ({
        ...prev,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleDocumentRemoveClock);
    document.removeEventListener('click', this.handleDocumentAddClock);
  }

  handleDocumentRemoveClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      hasClock: false,
    }));
  };

  handleDocumentAddClock = () => {
    this.setState((prev) => ({
      ...prev,
      hasClock: true,
    }));
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
