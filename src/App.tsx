import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  lastUpdated: string | null;
  nameUpdateAllowed: boolean;
};

export class App extends React.Component<{}, AppState> {
  timerId: NodeJS.Timeout | null = null;

  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
    lastUpdated: null,
    nameUpdateAllowed: true,
  };

  componentDidMount(): void {
    this.startNameChange();

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  showClock = () => {
    this.setState({ hasClock: true, lastUpdated: null });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  startNameChange() {
    this.timerId = setInterval(() => {
      const newName = getRandomName();

      if (this.state.clockName !== newName) {
        this.setState({ clockName: newName });
      }
    }, 3300);
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
