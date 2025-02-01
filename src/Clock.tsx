import React, { Component } from 'react';

interface ClockProps {
  clockName: string;
}

interface ClockState {
  today: Date;
  prevClockName: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  timerId: number = 0;

  state: ClockState = {
    today: new Date(),
    prevClockName: this.props.clockName, // Початкове значення
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
