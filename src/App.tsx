import React from 'react';
import './App.scss';
import { clearInterval } from 'timers';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean,
  clockName: string,
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => this.rename(), 3300);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    clearInterval(this.timerId);
  }

  hideClock = (event: Event) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  showClock = (event: Event) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  rename() {
    this.setState({
      clockName: getRandomName(),
    });
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
