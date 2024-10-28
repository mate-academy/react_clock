/* eslint-disable no-console */

import React from 'react';

type ClockProps = {
  name: string;
  hasClock: boolean;
};

export class Clock extends React.Component<ClockProps> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeInterval = 0;

  componentDidMount(): void {
    this.timeInterval = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: newDate });

      if (this.props.hasClock) {
        console.log(newDate);
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeInterval);
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.today}</span>{' '}
      </div>
    );
  }
}
