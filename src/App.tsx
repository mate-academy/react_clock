import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId: number = 0;

  clockNameTimerId: number = 0;

  startClock = () => {
    // Clear any existing timer before starting a new one
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    // Set an interval to update the time and clock name
    this.timerId = window.setInterval(() => {
      const newTime = new Date();

      // Update clock name every 3300ms
      this.setState({ today: newTime });

      // Log time to console every second and update the displayed time
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(newTime.toUTCString().slice(-12, -4));
      }
    }, 1000); // Time update every second

    // This timer will update the clock name more accurately every 3300ms
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300); // Update clock name every 3300ms
  };

  stopClock = () => {
    clearInterval(this.timerId);
    clearInterval(this.clockNameTimerId);
  };

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.startClock();

    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (!prevState.hasClock && this.state.hasClock) {
      this.startClock();
      // Оновлюємо час негайно при показі годинника
      this.setState({ today: new Date() });
    }

    if (prevState.hasClock && !this.state.hasClock) {
      this.stopClock();
    }

    // Логування буде тільки якщо ім'я дійсно змінилося
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>

        {hasClock && <Clock name={clockName} time={today} />}
      </div>
    );
  }
}
