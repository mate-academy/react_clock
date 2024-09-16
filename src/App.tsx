import React, { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true, // Часы отображаются сразу
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock); // Скрываем часы при правом клике
    document.addEventListener('click', this.showClock); // Показываем часы при левом клике
    this.startClockNameUpdate();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  startClockNameUpdate() {
    setInterval(() => {
      this.setState(prevState => {
        const newClockName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newClockName}`);

        return { clockName: newClockName };
      });
    }, 3300);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return <div>{hasClock && <Clock name={clockName} />}</div>;
  }
}
