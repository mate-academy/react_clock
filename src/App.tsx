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

      // Move the following line outside the if condition
      // to ensure console.info is called every second
      // eslint-disable-next-line no-console
      console.info(`The time is ${newClockName}`);

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info('some message');
      }

      this.setState({ clockName: newClockName });
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
