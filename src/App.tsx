/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import './Page.scss';
import { Clock } from './component/Clock/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock name: ${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  nameTimer = 0;

  componentDidMount() {
    const interval = () => {
      this.setState({ clockName: getRandomName() });
    };

    this.nameTimer = window.setInterval(interval, 3300);

    document.addEventListener('contextmenu', (element) => {
      element.preventDefault();
      this.setState({ hasClock: false });
      clearInterval(this.nameTimer);
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
      this.nameTimer = window.setInterval(interval, 3300);
    });
  }

  render() {
    const { hasClock, clockName } = this.state;
    let title = 'Press RMC to hide the clock';

    if (!hasClock) {
      title = 'Press LMC to show the clock';
    }

    return (
      <div className="app" title={title}>
        <h1 className="app__title">React clock</h1>
        { hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
