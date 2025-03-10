import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  time: string;
}

export class App extends React.Component<{}, AppState> {
  private timeIntervalId: number | null = null;

  private nameIntervalId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.startTimeInterval();

    this.nameIntervalId = window.setInterval(() => {
      this.setState(prevState => {
        const newName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newName}`);

        return { clockName: newName };
      });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
    if (this.state.hasClock && !prevState.hasClock) {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      this.startTimeInterval();
    } else if (
      !this.state.hasClock &&
      prevState.hasClock &&
      this.timeIntervalId
    ) {
      clearInterval(this.timeIntervalId);
      this.timeIntervalId = null;
    }
  }

  componentWillUnmount() {
    if (this.timeIntervalId) {
      clearInterval(this.timeIntervalId);
    }

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  }

  private startTimeInterval() {
    if (!this.timeIntervalId) {
      this.timeIntervalId = window.setInterval(() => {
        const currentTime = new Date().toUTCString().slice(-12, -4);

        this.setState({ time: currentTime });
        // eslint-disable-next-line no-console
        console.log(currentTime);
      }, 1000);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>
            {' time is '}
            <span className="Clock__time">{this.state.time}</span>
          </div>
        )}
      </div>
    );
  }
}
