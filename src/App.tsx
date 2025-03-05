import { Component } from 'react'
import './App.scss'

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends Component<ClockProps, ClockState> {
  private timerId?: number;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
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
        <strong className="Clock__name">{this.props.name}</strong> time is{' '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends Component<{}, AppState> {
  private nameInterval?: number;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.nameInterval = window.setInterval(() => {
      this.setState((prevState) => {
        const newName = getRandomName();
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newName}`);
        return { clockName: newName };
      });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    if (this.nameInterval) {
      clearInterval(this.nameInterval);
    }
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

export default App;
