import React from 'react';
import './App.scss';
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  myChangeTimeId: number | undefined;

  changeTime(): void {
    this.setState({ today: new Date() });
  }

  startChangeTimeInterval(): void {
    if (this.myChangeTimeId) {
      return;
    }

    this.myChangeTimeId = window.setInterval(() => {
      this.changeTime();

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  timerId(): void {
    this.setState({ clockName: getRandomName() });
  }

  componentDidMount(): void {
    window.setInterval(() => {
      this.timerId();
    }, 3300);

    this.startChangeTimeInterval();

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      if (this.myChangeTimeId) {
        window.clearInterval(this.myChangeTimeId);
        this.myChangeTimeId = undefined;
      }

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });

      if (!this.myChangeTimeId) {
        this.startChangeTimeInterval();
        this.changeTime();
      }
    });
  }

  componentDidUpdate(
    _prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.hasClock) {
      if (prevState.clockName !== this.state.clockName) {
        // eslint-disable-next-line no-console
        console.warn(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.myChangeTimeId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.state;
    const { hasClock } = this.state;

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
