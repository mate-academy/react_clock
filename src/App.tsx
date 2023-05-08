import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState{
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockNameId = 0;

  componentDidMount() {
    document.addEventListener('click', this.displayClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.timerClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerClockNameId);
    document.removeEventListener('click', this.displayClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  displayClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  hideClock = (event: Event) => {
    if (this.state.hasClock) {
      event.preventDefault();
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
