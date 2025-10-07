import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  private nameIntervalId?: number;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    // Atualiza o nome do relógio a cada 3,3s, independentemente do hasClock
    this.nameIntervalId = window.setInterval(() => {
      const newName = getRandomName();
      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentWillUnmount() {
    if (this.nameIntervalId !== undefined) {
      window.clearInterval(this.nameIntervalId);
    }

    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  showClock = (): void => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
