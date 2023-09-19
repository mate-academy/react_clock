/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  nameId: number | undefined = undefined;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.startClockNameUpdate();
    document.addEventListener('click', this.handleMouseClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleMouseClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    this.stopClockNameUpdate();
  }

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  startClockNameUpdate() {
    this.nameId = window.setInterval(() => {
      const newClockName = getRandomName();

      if (this.state.hasClock) {
        console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
        console.info(`${new Date().toUTCString().slice(-12, -4)}`);
      }

      this.setState({ clockName: newClockName });
    }, 3300);
  }

  stopClockNameUpdate() {
    if (this.nameId !== undefined) {
      window.clearInterval(this.nameId);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
