import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      if (this.state.hasClock) {
        // Only print messages and update state if the clock is visible
        // eslint-disable-next-line no-console
        console.info('some message');
        // eslint-disable-next-line no-console
        console.info(`The time is ${newClockName}`);
        this.setState({ clockName: newClockName });
      }
    }, 1000);
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
    const { hasClock, clockName } = this.state;

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
            <span className="Clock__time">
              {new Date().toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
