import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = { time: new Date().toUTCString().slice(-12, -4) };

  timerId: NodeJS.Timeout | null = null;

  shouldComponentUpdate(
    nextProps: Readonly<{ name: string }>,
    nextState: Readonly<{ time: string }>,
  ): boolean {
    return (
      this.props.name !== nextProps.name || this.state.time !== nextState.time
    );
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
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
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

export class App extends React.Component {
  clockNameUpdater: NodeJS.Timeout | null = null;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
    justReappeared: false,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.startClockNameUpdater();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    this.stopClockNameUpdater();
  }

  startClockNameUpdater = () => {
    if (!this.clockNameUpdater) {
      this.clockNameUpdater = setInterval(() => {
        const newName = getRandomName();

        this.setState({ clockName: newName });
      }, 3300);
    }
  };

  stopClockNameUpdater = () => {
    if (this.clockNameUpdater) {
      clearInterval(this.clockNameUpdater);
      this.clockNameUpdater = null;
    }
  };

  handleRightClick = event => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = event => {
    event.preventDefault();
    const newClockName = getRandomName();

    this.setState({ hasClock: true, clockName: newClockName }, () => {
      this.startClockNameUpdater();
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName || getRandomName()} />}
      </div>
    );
  }
}
