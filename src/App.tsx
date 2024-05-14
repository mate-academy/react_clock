import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockTime: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    clockTime: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  // This code starts a timer
  timerIdClockName = 0;

  timerIdUpdateTime = 0;

  hideClock = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerIdClockName = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    this.timerIdUpdateTime = window.setInterval(() => {
      this.setState({ clockTime: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentDidUpdate(prevProps, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }

    if (prevState.clockTime !== this.state.clockTime && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.log(this.state.clockTime.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdClockName);
    window.clearInterval(this.timerIdUpdateTime);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  render() {
    const { clockTime, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              {clockTime.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
