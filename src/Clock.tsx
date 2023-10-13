import { Component } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface IState {
  intervalId: NodeJS.Timer | null;
  clockNameIntervalId: NodeJS.Timer | null;
  clockName: string;
  today: Date;
}

interface IProps {
  name: string;
}

function getReadableDate(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

function getCurrentTime() {
  return new Date();
}

export class Clock extends Component<IProps, IState> {
  state: IState = {
    intervalId: null,
    clockNameIntervalId: null,
    clockName: this.props.name || 'Clock-0',
    today: new Date(),
  };

  componentDidMount() {
    this.startInterval();
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.name !== this.props.name) {
      const oldName = this.state.clockName;
      const newName = this.props.name;

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    this.finishInterval();
  }

  changeClockName = () => {
    const newName = getRandomName();
    const oldName = this.state.clockName;

    this.setState({ clockName: newName });

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${oldName} to ${newName}`);
  };

  updateTime = () => {
    const currentTime = getCurrentTime();

    this.setState({ today: currentTime });
    // eslint-disable-next-line no-console
    console.info(getReadableDate(currentTime));
  };

  startInterval = () => {
    if (this.state.intervalId === null) {
      const interval = setInterval(this.updateTime, 1000);
      const nameInterval = setInterval(this.changeClockName, 3300);

      this.setState({
        intervalId: interval,
        clockNameIntervalId: nameInterval,
      });
    }
  };

  finishInterval = () => {
    if (typeof this.state.intervalId === 'number') {
      clearInterval(this.state.intervalId);
    }

    if (typeof this.state.clockNameIntervalId === 'number') {
      clearInterval(this.state.clockNameIntervalId);
    }

    this.setState({
      intervalId: null,
      clockNameIntervalId: null,
    });
  };

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{getReadableDate(today)}</span>
      </div>
    );
  }
}
