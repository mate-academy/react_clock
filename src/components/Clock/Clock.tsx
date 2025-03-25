/* eslint-disable no-console */
import React from 'react';

interface Props {
  clockName: string;
}

interface ClockState {
  today: Date;
}

export class Clock extends React.Component<Props, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();

      this.setState({ today: currentDate });

      console.log(currentDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
