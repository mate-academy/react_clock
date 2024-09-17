/* eslint-disable no-console */

import React from 'react';

import { getRandomName } from './utils/function';

import { Clock } from './Clock';

import './App.scss';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;
  cleanupListeners: () => void = () => {};

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState(() => ({ clockName }));
    }, 3300);

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    };

    const handleClick = () => {
      this.setState({ hasClock: true });
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    this.cleanupListeners = () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    this.cleanupListeners();
  }

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
