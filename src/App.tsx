import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  name: string;
};

type AppState = {
  hasClock: boolean;
  clockName: string;
};

class Clock extends React.Component<ClockProps> {
  timerId = 0;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date();

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.log(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId = 0;

componentDidMount() {
  document.addEventListener('contextmenu', this.hideClock);
  document.addEventListener('click', this.showClock);

  this.nameTimerId = window.setInterval(() => {
    this.setState({
      clockName: getRandomName(),
    });
  }, 3300);
}

  componentDidUpdate(
  prevProps: Readonly<{}>,
  prevState: Readonly<AppState>,
) {
  if (
    prevState.clockName !== this.state.clockName &&
    this.state.hasClock &&
    prevState.hasClock
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
    );
  }
}

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    window.clearInterval(this.nameTimerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
