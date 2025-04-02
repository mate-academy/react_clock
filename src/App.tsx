import React from 'react';
import './App.scss';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameId: number | null = null;

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  private handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
      clockName: getRandomName(), // Update clockName immediately
    });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    // Update clockName every 3300ms
    this.startClockNameInterval();
  }

  componentDidUpdate(prevProps: {}, prevState: AppState): void {
    if (prevState.hasClock !== this.state.hasClock) {
      if (this.state.hasClock) {
        // Restart the interval when the Clock is shown
        this.startClockNameInterval();
      } else {
        // Clear the interval when the Clock is hidden
        this.clearClockNameInterval();
      }
    }
  }

  private startClockNameInterval(): void {
    if (this.nameId !== null) {
      window.clearInterval(this.nameId);
    }

    this.nameId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState(prevState => {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newClockName}`);

        return { clockName: newClockName };
      });
    }, 3300);
  }

  private clearClockNameInterval(): void {
    if (this.nameId !== null) {
      window.clearInterval(this.nameId);
      this.nameId = null;
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    this.clearClockNameInterval();
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
