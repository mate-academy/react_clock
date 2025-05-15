import React, { Component } from 'react';
import { Clock } from './Clock';
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
  private nameTimerId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClockHandler);
    document.addEventListener('click', this.showClockHandler);

    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClockHandler);
    document.removeEventListener('click', this.showClockHandler);

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
      this.nameTimerId = null;
    }
  }

  hideClockHandler = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  showClockHandler = () => {
    this.setState({ hasClock: true });
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
