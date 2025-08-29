import React, { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  state: ClockState = {
    time: this.getCurrentTime(),
  };

  componentDidMount(): void {
    this.startTimer();
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    this.stopTimer();
  }

  getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  startTimer(): void {
    this.timerId = window.setInterval(() => {
      const time = this.getCurrentTime();

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
