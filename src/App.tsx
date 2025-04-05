import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

export default class Clock extends Component<ClockProps> {
  state = {
    time: this.getTime(),
  };

  timerId: number | null = null;

  getTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = this.getTime();

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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

export class App extends Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | null = null;

  componentDidMount() {
    if (this.timerId === null) {
      this.timerId = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }

    document.addEventListener('click', this.enableClock);
    document.addEventListener('contextmenu', this.disableClock);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.disableClock);
    document.removeEventListener('click', this.enableClock);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  disableClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  enableClock = () => {
    this.setState({ hasClock: true });
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
