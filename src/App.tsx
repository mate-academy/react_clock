import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function showInConsole(message: string, type: 'log' | 'warn'): void {
  if (type === 'warn') {
    console.warn(message); // eslint-disable-line no-console
  } else {
    console.log(message); // eslint-disable-line no-console
  }
}

type Props = {};

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
  wasRestarted: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
    wasRestarted: false,
  };

  timerId = 0;

  timerShowId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);

    this.timerShowId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });
    }, 1000);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      if (!this.state.hasClock) {
        return;
      }

      this.setState({ hasClock: false });
      window.clearInterval(this.timerShowId);
    });

    document.addEventListener('click', () => {
      if (this.state.hasClock) {
        return;
      }

      this.setState({ hasClock: true, today: new Date(), wasRestarted: true });
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (this.state.wasRestarted) {
      window.clearInterval(this.timerShowId);

      this.timerShowId = window.setInterval(() => {
        const newDate = new Date();

        this.setState({ today: newDate });
      }, 1000);

      this.setState({ wasRestarted: false });
    } else {
      if (prevState.today !== this.state.today) {
        showInConsole(this.state.today.toUTCString().slice(-12, -4), 'log');
      }

      if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
        showInConsole(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
          'warn',
        );
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerShowId);
  }

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
