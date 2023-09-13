import React from 'react';

interface ClockProps {
  name: string;
  today: Date;
}

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component<ClockProps> {
  render() {
    const { name, today } = this.props;

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
