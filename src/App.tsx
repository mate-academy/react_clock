import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  today: Date;
  clockName: string;
  timerIds: { clockTimerId: number; timeTimerId: number };
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
    timerIds: { clockTimerId: 0, timeTimerId: 0 },
  };

  componentDidMount(): void {
    this.setupTimeUpdate();
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    this.clearTimeUpdate();
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  setupTimeUpdate = (): void => {
    const timeTimerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    const clockTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    this.setState({
      timerIds: { clockTimerId, timeTimerId },
    });
  };

  clearTimeUpdate = (): void => {
    window.clearInterval(this.state.timerIds.timeTimerId);
  };

  componentDidUpdate(_prevProps: unknown, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  hideClock = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false }, this.clearTimeUpdate);
  };

  showClock = (): void => {
    this.setState({ hasClock: true, today: new Date() }, this.setupTimeUpdate);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
