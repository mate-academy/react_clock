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
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: '',
  };

  clockNameTimerId = 0;

  currentTimeTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.clockNameTimerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
    }, 3300);

    this.currentTimeTimerId = window.setInterval(() => {
      const today = new Date();
      const currentTime = today.toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);

      this.setState({ currentTime: currentTime });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameTimerId);
    window.clearInterval(this.currentTimeTimerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName } = this.state;
    const today = new Date();

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
