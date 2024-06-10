import { Component } from 'react';

type Props = {
  name?: string;
};

type State = {
  currentTime: string;
  hasClock: boolean;
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: this.props.name || 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | null = null;

  clockNameTimerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);

    this.clockNameTimerId = window.setInterval(() => {
      const newClockName = this.getRandomName();

      this.setState({ clockName: newClockName });
      // eslint-disable-next-line no-console
      console.debug(newClockName);
    }, 3300);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    if (this.clockNameTimerId !== null) {
      window.clearInterval(this.clockNameTimerId);
    }
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { currentTime, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
