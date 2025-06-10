import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  time: Date;
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    time: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  private timerId: number | undefined;

  private nameTimerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(this.state.time.toUTCString().slice(-12, -4)); // Corrected time format for console
      }
    }, 1000);
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleDocumentClick);

    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleDocumentClick);
  }

  componentDidUpdate(_prevProps: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName) {
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.warn(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false }); // Always hide on right-click
  };

  private handleDocumentClick = () => {
    // Show the clock on any left click
    this.setState({ hasClock: true });
  };

  render() {
    const { time, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              {time.toUTCString().slice(-12, -4)}{' '}
              {/* Corrected time format for display */}
            </span>
          </div>
        )}
      </div>
    );
  }
}
