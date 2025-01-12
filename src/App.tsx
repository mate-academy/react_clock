import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, AppState> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId: NodeJS.Timeout | null = null;

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    this.setState({ hasClock: true, clockName: 'Clock-4900' });
  };

  startNameTimer = () => {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
      this.nameTimerId = null;
    }

    this.nameTimerId = setInterval(() => {
      this.setState(() => {
        const newName = getRandomName();

        return { clockName: newName };
      });
    }, 3300);
  };

  componentDidMount() {
    addEventListener('contextmenu', this.handleHideClock);
    addEventListener('click', this.handleShowClock);

    this.startNameTimer();
  }

  componentWillUnmount() {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }

    removeEventListener('contextmenu', this.handleHideClock);
    removeEventListener('click', this.handleShowClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
