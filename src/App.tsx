/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.RemoveClock);
    document.addEventListener('click', this.ShowClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.RemoveClock);
    document.removeEventListener('click', this.ShowClock);
  }

  RemoveClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  ShowClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}

      </div>
    );
  }
}
