import React from 'react';

type Props = {
  clockName: string;
  today: Date;
};

export class Clock extends React.Component<Props> {
  render(): React.ReactNode {
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
