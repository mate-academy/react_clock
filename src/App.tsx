import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerNameId = 0;

  componentDidMount(): void {
    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  handleShowClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
