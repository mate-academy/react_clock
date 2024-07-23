import React from 'react';

type Props = {
  name: string;
  today: Date;
  hasClock: boolean;
};

export class Clock extends React.Component<Props> {
  render() {
    const { name, today, hasClock } = this.props;

    return (
      hasClock && (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>
          {' time is '}
          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )
    );
  }
}
