import { Component } from 'react';

interface ClockProps {
  clockName: string;
}

interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeIntervalId: number | undefined;

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(`${newTime}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timeIntervalId) {
      window.clearInterval(this.timeIntervalId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
