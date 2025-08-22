//import React, { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  time: string;
};

export class App extends React.Component<{}, State> {
  private nameTimerId?: number;

  private timeTimerId?: number;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date().toLocaleTimeString(),
  };

  /* eslint-disable */
  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timeTimerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });

      console.log(currentTime);
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }

    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    console.log('Clique com o botão direito bloqueado!');
  };

  handleClick = (e: MouseEvent) => {
    console.log('Clique detectado no documento');
  };
  /* eslint-disable */

  render(): React.ReactNode {
    const { hasClock, clockName, time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clock={clockName} time={time} />}
      </div>
    );
  }
}
