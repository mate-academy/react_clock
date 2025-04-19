import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  currentClockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    currentClockName: 'Clock-0',
  };

  timerId = 0;

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentClockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.hideClock);
    window.addEventListener('click', this.showClock);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.hideClock);
    window.removeEventListener('click', this.showClock);
  }

  render(): React.ReactNode {
    const { hasClock, currentClockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={currentClockName} />}
      </div>
    );
  }
}
