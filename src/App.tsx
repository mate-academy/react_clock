import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  today: Date;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  timerId: number | undefined;

  nameId: number | undefined;

  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  componentDidMount() {
    this.startTimers();
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    this.clearTimers();
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      //eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  restartTimeTimer = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        if (this.state.hasClock) {
          // eslint-disable-next-line no-console
          console.log(`${this.state.today.toUTCString().slice(-12, -4)}`);
        }
      });
    }, 1000);
  };

  startTimers = () => {
    this.nameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.restartTimeTimer();
  };

  clearTimers = () => {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.nameId) {
      window.clearInterval(this.nameId);
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true, today: new Date() }, this.restartTimeTimer);
  };

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
