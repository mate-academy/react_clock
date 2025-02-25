import React from 'react';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId: number = 0;

  timeId: number = 0;

  startIntervals = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timeId = window.setInterval(() => {
      this.setState(() => {
        const newTime = new Date().toUTCString().slice(-12, -4);

        // eslint-disable-next-line no-console
        console.log(newTime);

        return { today: new Date() };
      });
    }, 1000);
  };

  handleMouseRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false }, () => {
      if (this.timerId !== 0) {
        window.clearInterval(this.timerId);
        this.timerId = 0;
      }

      if (this.timeId !== 0) {
        window.clearInterval(this.timeId);
        this.timeId = 0;
      }
    });
  };

  handleMouseLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });

    this.startIntervals();
  };

  componentDidMount(): void {
    this.setState({ today: new Date() });
    this.startIntervals();

    document.addEventListener('contextmenu', this.handleMouseRightClick);
    document.addEventListener('click', this.handleMouseLeftClick);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    window.clearInterval(this.timeId);

    document.removeEventListener('contextmenu', this.handleMouseRightClick);
    document.removeEventListener('click', this.handleMouseLeftClick);
  }

  render() {
    const { clockName, today, hasClock } = this.state;

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
