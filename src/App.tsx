import React from 'react';
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

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameUpdateIntervalId: number | undefined = undefined;

  timeUpdateIntervalId: number | undefined = undefined;

  recentlyLoggedTime = false;

  componentDidMount(): void {
    this.nameUpdateIntervalId = window.setInterval(this.updateClockName, 3300);
    this.timeUpdateIntervalId = window.setInterval(this.logCurrentTime, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    this.clearIntervals();
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleDocumentClick);
  }

  clearIntervals = () => {
    if (this.nameUpdateIntervalId) {
      clearInterval(this.nameUpdateIntervalId);
    }

    if (this.timeUpdateIntervalId) {
      clearInterval(this.timeUpdateIntervalId);
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.clearIntervals();
    this.setState({ hasClock: false });
  };

  handleDocumentClick = () => {
    this.clearIntervals();

    const originalName = this.state.clockName;

    this.setState((prevState) => {
      return { hasClock: true, clockName: prevState.clockName };
    });

    let canLogTime = false;

    setTimeout(() => {
      canLogTime = true;
    }, 1000);

    this.timeUpdateIntervalId = window.setInterval(() => {
      if (canLogTime) {
        this.logCurrentTime();
      }
    }, 1000);

    this.nameUpdateIntervalId = window.setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${originalName} to ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);
  };

  updateClockName = () => {
    const newName = getRandomName();

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${this.state.clockName} to ${newName}`);
    this.setState({ clockName: newName });
  };

  logCurrentTime = () => {
    if (this.state.hasClock) {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.info(currentTime);
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
