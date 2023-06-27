/* eslint-disable no-console */
import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  time: string;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  timerId: number | null = null;

  state: State = {
    time: '',
    hasClock: true,
    clockName: '',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.updateTime();
    this.timerId = window.setInterval(this.updateTime, 1000);
    window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  updateTime = () => {
    const today = new Date();
    const time = today.toUTCString().slice(-12, -4);

    console.info(time);

    this.setState({ time });
  };

  updateClockName = () => {
    const newClockName = getRandomName();

    console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);

    this.setState({ clockName: newClockName });
  };

  render() {
    const { time, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {hasClock && (
            <div>
              <strong>{clockName}</strong>
              {' time is '}
              {time}
            </div>
          )}
        </div>
      </div>
    );
  }
}
