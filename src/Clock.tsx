import React, { ReactNode } from 'react';
import { formatTime } from './formatTime';

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    currentTime: new Date(),
    timerId: undefined,
  };

  // This code starts a timer
  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(formatTime(currentTime));
      this.setState({
        currentTime,
      });
    }, 1000);

    this.setState({
      timerId,
    });
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  render(): ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {formatTime(this.state.currentTime)}
        </span>
      </div>
    );
  }
}
