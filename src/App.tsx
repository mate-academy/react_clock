import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  clockName: string;
  time: string;
};

class Clock extends Component<ClockProps> {
  render() {
    const { clockName, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong> time is{' '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  time: string;
};

export class App extends Component<{}, AppState> {
  private timerId: NodeJS.Timeout | null = null;

  private nameIntervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      hasClock: true,
      clockName: 'Clock-0',
      time: new Date().toUTCString().slice(-12, -4),
    };
  }

  componentDidMount() {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: currentTime }, () => {
      this.startTimers();
    });
    window.addEventListener('click', this.toggleClock);
    window.addEventListener('contextmenu', this.hideClock);
  }

  componentWillUnmount() {
    this.clearTimers();
    window.removeEventListener('click', this.toggleClock);
    window.removeEventListener('contextmenu', this.hideClock);
  }

  startTimers() {
    this.timerId = setInterval(() => {
      if (this.state.hasClock) {
        const currentTime = new Date().toUTCString().slice(-12, -4);

        this.setState({ time: currentTime });

        // eslint-disable-next-line no-console
        console.log(currentTime);
      }
    }, 1000);

    this.nameIntervalId = setInterval(() => {
      if (this.state.hasClock) {
        this.setState(prevState => {
          const newName = getRandomName();

          // eslint-disable-next-line no-console
          console.warn(`Renamed from ${prevState.clockName} to ${newName}`);

          return { clockName: newName };
        });
      }
    }, 3300);
  }

  clearTimers() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  }

  toggleClock = () => {
    this.setState(prevState => ({ hasClock: !prevState.hasClock }));
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false }, () => {
      this.clearTimers();
    });
  };

  render() {
    const { hasClock, clockName, time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} time={time} />}
      </div>
    );
  }
}
