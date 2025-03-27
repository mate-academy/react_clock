import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

interface ClockState {
  time: string;
}

class Clock extends Component<{ name: string }, ClockState> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(() => ({
        time: new Date().toUTCString().slice(-12, -4),
      }));
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong> time is
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

export class App extends Component<{}, AppState> {
  state: AppState = { hasClock: true, clockName: 'Clock-0' };

  private timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.startRenaming();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  startRenaming() {
    this.timerId = setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line no-console
      console.log(`Renamed from ${this.state.clockName} to ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });

    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  showClock = () => {
    this.setState({ hasClock: true }, () => {
      if (!this.timerId) {
        this.startRenaming();
      }
    });
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
