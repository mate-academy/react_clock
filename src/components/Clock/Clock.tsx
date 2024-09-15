import React from 'react';

interface ClockProps {
  clockName: string;
  today: Date;
}

export class Clock extends React.Component<ClockProps> {
  render() {
    const { clockName, today } = this.props;

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
