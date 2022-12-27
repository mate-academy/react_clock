import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  intervalId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.removeClock);

    document.addEventListener('click', this.addClock);

    this.intervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.removeClock);

    document.removeEventListener('click', this.addClock);

    clearInterval(this.intervalId);
  }

  addClock = () => {
    this.setState({ hasClock: true });
  };

  removeClock = (event: any) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

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
