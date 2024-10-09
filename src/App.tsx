/* eslint-disable no-console */
import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: State = {
    isClock: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  cleanupListeners: () => void = () => {};

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState(() => ({
        clockName,
      }));
    }, 3300);

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ isClock: false });
    };

    const handleClick = () => {
      this.setState({ isClock: true });
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    this.cleanupListeners = () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }

  componentDidUpdate(
    prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.isClock) {
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    this.cleanupListeners();
  }

  render() {
    const { clockName, isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
