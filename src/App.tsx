import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  private timerId: number | null = null;

  private timerUpdate: number | null = null;

  handleContexMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.startTimeUpdateInterval();

    document.addEventListener('contextmenu', this.handleContexMenu);
    document.addEventListener('click', this.handleClick);
  }

  startTimeUpdateInterval = () => {
    if (this.timerUpdate) {
      window.clearInterval(this.timerUpdate);
    }

    this.timerUpdate = window.setInterval(() => {
      if (this.state.hasClock) {
        const currentTime = new Date();

        this.setState({ today: currentTime });
        // eslint-disable-next-line no-console
        console.log(currentTime.toUTCString().slice(-12, -4));
      }
    }, 1000);
  };

  componentDidUpdate(prevProps: {}, prevState: Readonly<State>): void {
    if (this.state.clockName !== prevState.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }

    if (!prevState.hasClock && this.state.hasClock) {
      this.startTimeUpdateInterval();
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.timerUpdate) {
      window.clearInterval(this.timerUpdate);
    }

    document.removeEventListener('contextmenu', this.handleContexMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render(): React.ReactNode {
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
