import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

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

  componentDidMount(): void {
    this.startNameTimer();
    this.setupEventListeners();
  }

  componentWillUnmount(): void {
    this.stopNameTimer();
    this.removeEventListeners();
  }

  startNameTimer(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  stopNameTimer(): void {
    if (this.nameTimerId !== null) {
      window.clearInterval(this.nameTimerId);
      this.nameTimerId = null;
    }
  }

  setupEventListeners(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  removeEventListeners(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
