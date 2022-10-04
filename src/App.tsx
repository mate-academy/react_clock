/* eslint-disable no-console */
import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameLog = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.onContextMenu();
    });

    document.addEventListener('click', this.onClick);

    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.nameLog = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.onContextMenu);

    document.removeEventListener('click', this.onClick);

    window.clearInterval(this.nameLog);
  }

  onContextMenu = () => this.setState({ hasClock: false });

  onClick = () => this.setState({ hasClock: true });

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
