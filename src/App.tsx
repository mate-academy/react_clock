import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class App extends Component<{}, AppState> {
  private timerId: number | undefined;

  state: Readonly<AppState> = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();
      const newCurrentTime = new Date().toLocaleTimeString();

      // eslint-disable-next-line no-console
      console.info(`The time is ${newClockName}`);

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info('some message');
      }

      this.setState({ clockName: newClockName, currentTime: newCurrentTime });
    }, 3000);
  }

  componentDidUpdate(_: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div
        className="App"
        role="button"
        tabIndex={0}
        onContextMenu={this.handleContextMenu}
        onClick={this.handleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            this.handleClick();
          }
        }}
      >
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}
