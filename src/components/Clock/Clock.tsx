import React from 'react';
import { ClockProps, ClockState } from '../../types/types';

export class Clock extends React.Component<ClockProps> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeTimer = 0;

  componentDidMount() {
    this.timeTimer = window.setInterval(() => {
      const time: string = new Date().toUTCString().slice(-12, -4);

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.log(time);
      }

      this.setState({ time: time });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeTimer);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
