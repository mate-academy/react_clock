import React from 'react';
import './App.scss';

export class App extends React.Component<{}, {
  clockName: string,
  clockTime: string,
  hasClock: boolean,
  isClockVisible: boolean,
  // lastHideTime: number
}> {
  nameTimerId = 0;

  timeTimerId = 0;

  state = {
    clockName: 'Clock-0',
    clockTime: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
    isClockVisible: true,
    // lastHideTime: 0,
  };

  componentDidMount(): void {
    this.startNameTimer();
    this.startTimeTimer();
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    // this.stopNameTimer();
    // this.stopTimeTimer();
    // document.removeEventListener('contextmenu', this.hideClock);
    // document.removeEventListener('click', this.showClock);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  hideClock = (event: MouseEvent): void => {
    if (this.state.isClockVisible) {
      event.preventDefault();
      this.setState({ isClockVisible: false });
    }
  };

  showClock = (): void => {
    if (!this.state.isClockVisible) {
      this.setState({
        isClockVisible: true,
        clockTime: new Date().toUTCString().slice(-12, -4),
      });
      this.startTimeTimer();
    }
  };

  // This code starts a timer
  startNameTimer(): void {
    this.nameTimerId = window.setInterval(() => {
      const clockName = this.getRandomName();

      if (this.state.isClockVisible) {
        const oldName = this.state.clockName;

        this.setState({ clockName });
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${oldName} to ${clockName}`);
      }
    }, 3300);
  }

  startTimeTimer(): void {
    this.timeTimerId = window.setInterval(() => {
      if (this.state.isClockVisible) {
        this.setState({ clockTime: new Date().toUTCString().slice(-12, -4) });
        // eslint-disable-next-line no-console
        console.info(`${this.state.clockTime}`);
      }
    }, 1000);
  }

  // this code stops the timer
  stopNameTimer(): void {
    clearInterval(this.nameTimerId);
  }

  stopTimeTimer(): void {
    clearInterval(this.timeTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && this.state.isClockVisible && (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.clockName}
            </strong>

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
