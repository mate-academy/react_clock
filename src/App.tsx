import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string;
  hasClock: boolean;
}

interface ClockState {
  Time: Date;
}

export class Clock extends React.Component<{ name: string }, ClockState> {
  public today = new Date();

  public timerId = 0;

  state: Readonly<ClockState> = {
    Time: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ Time: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.Time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  public clockNameTimerId = 0;

  state: Readonly<AppState> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('mousedown', this.handleMouseClick);
    window.addEventListener('contextmenu', this.handleMouseClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);
    window.removeEventListener('mousedown', this.handleMouseClick);
    window.removeEventListener('contextmenu', this.handleMouseClick);
  }

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }

    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
