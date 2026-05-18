import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  today: Date;
  clockName: string;
  hasClock: boolean;
}

type Props = {
  today?: Date;
  hasClock?: boolean;
  clockName?: string;
};

export class Clock extends React.Component<Props> {
  state = { today: new Date() };

  timer: number = 0;

  componentDidMount() {
    if (this.props.hasClock) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.hasClock && !this.props.hasClock) {
      window.clearInterval(this.timer);
    }

    if (!prevProps.hasClock && this.props.hasClock) {
      this.setState({ today: new Date() });
      this.startTimer();
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  startTimer = () => {
    window.clearInterval(this.timer);

    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  };

  render() {
    const { hasClock, clockName } = this.props;
    const { today } = this.state as { today: Date };

    if (!hasClock) {
      return null;
    }

    return (
      <div className="ClockContainer">
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>
          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}

export class App extends React.Component<{}, State> {
  timerSec: number = 0;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timerSec = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (
      prevState.clockName !== this.state.clockName &&
      prevState.hasClock &&
      this.state.hasClock
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerSec);

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock today={today} hasClock={hasClock} clockName={clockName} />
      </div>
    );
  }
}
