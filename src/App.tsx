/* eslint-disable @typescript-eslint/lines-between-class-members */
import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type ClockProps = {
  name: string;
};

export class Clock extends React.Component<ClockProps> {
  state = {
    currentTime: getCurrentTime(),
  };

  timerIdCurrentTime = 0;

  componentDidMount(): void {
    this.timerIdCurrentTime = window.setInterval(() => {
      this.setState({ currentTime: getCurrentTime() });

      // eslint-disable-next-line no-console
      console.log(getCurrentTime());
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdCurrentTime);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdHasClock = 0;
  timerIdClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
