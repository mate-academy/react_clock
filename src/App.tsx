import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  hasClock: boolean;
  clockName: string;
};

type ClockState = {
  today: Date;
  timeTimerId: number;
  nameTimerId: number;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state: Readonly<ClockState> = {
    today: new Date(),
    timeTimerId: 0,
    nameTimerId: 0,
  };

  updateTime = () => {
    const now = new Date();

    if (this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }

    this.setState({ today: now });
  };

  componentDidMount(): void {
    const timeTimerId = window.setInterval(this.updateTime, 1000);

    this.setState({
      timeTimerId: timeTimerId,
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timeTimerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  hideClockOnRightClick() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
  }

  showClockOnLeftClick() {
    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  componentDidMount(): void {
    const nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.setState({
      nameTimerId: nameTimerId,
    });
    this.hideClockOnRightClick();
    this.showClockOnLeftClick();
  }

  componentDidUpdate(prevProps, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        'Renamed from ' + prevState.clockName + ' to ' + this.state.clockName,
      );
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock hasClock={hasClock} clockName={clockName} />}
      </div>
    );
  }
}
