import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  today = new Date();

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  render() {
    const { hasClock, clockName } = this.state;

    document.addEventListener('contextmenu', () =>
      this.setState({ hasClock: false }),
    );

    document.addEventListener('click', () => this.setState({ hasClock: true }));

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
