import React from 'react';

type ClockProps = {
  clockName: string;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  private timer: number | null = null;

  private readonly timerInterval = 1000;

  state: ClockState = {
    time: this.getStringFromTime(),
  };

  private getStringFromTime(): string {
    const today = new Date();

    return today.toUTCString().slice(-12, -4);
  }

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newTime = this.getStringFromTime();

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, this.timerInterval);
  }

  componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const clockName = this.props.clockName;
    const time = this.state.time;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
