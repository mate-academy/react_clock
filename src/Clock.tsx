import React, { Component } from 'react';

type ClockProps = {
  name: string;
  time: string;
};

export class Clock extends Component<ClockProps> {
  render() {
    const { name, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
