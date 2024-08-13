import React from 'react';
import { ClockProps } from '../types/ClockProps';
import { ClockState } from '../types/ClockState';

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | undefined;

  state: ClockState = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({
        today: now,
      });

      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
