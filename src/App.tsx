import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
  today: Date;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
    today: new Date(),
  };

  clockTimerId = 0;

  nameTimerId = 0;

  updateNow = () => {
    const now = new Date();

    this.setState({ today: now });

    // eslint-disable-next-line no-console
    console.log(now.toUTCString().slice(-12, -4));
  };

  setNow = () => {
    const now = new Date();

    this.setState({ today: now });
  };

  startClockInterval = () => {
    if (this.clockTimerId) {
      return;
    }

    this.clockTimerId = window.setInterval(this.updateNow, 1000);
  };

  stopClockInterval = () => {
    window.clearInterval(this.clockTimerId);
    this.clockTimerId = 0;
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.startClockInterval();

    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentDidUpdate({}, prevState: Readonly<State>) {
    if (!prevState.hasClock && this.state.hasClock) {
      this.setNow();
      this.startClockInterval();
    }

    if (prevState.hasClock && !this.state.hasClock) {
      this.stopClockInterval();
    }

    if (
      prevState.clockName !== this.state.clockName &&
      prevState.hasClock &&
      this.state.hasClock
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    this.stopClockInterval();
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    const { clockName, hasClock, today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
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
