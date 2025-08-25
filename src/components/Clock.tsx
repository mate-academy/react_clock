import React from 'react';

type ClockProps = {
  name: string;
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
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const clockName = this.props.name;
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
