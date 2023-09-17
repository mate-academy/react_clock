import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

interface AppState {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, AppState> {
  timerId = 0;

  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.startTimer();
    document.addEventListener('contextmenu', this.handleHasClock);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    this.stopTimer();
    document.removeEventListener('contextmenu', this.handleHasClock);
    document.removeEventListener('click', this.handleClick);
  }

  handleHasClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  startTimer() {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);
  }

  stopTimer() {
    window.clearInterval(this.timerId);
  }

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
