import React, { Component } from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
  prevName: string | null;
};

export class Clock extends Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
    prevName: null,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      this.setState({ time: newTime });

      if (document.querySelector('.Clock')) {
        // eslint-disable-next-line no-console
        console.log(newTime);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        <span className="Clock__text">{' time is '}</span>
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
