import React, { ReactNode } from 'react';

type Props = {
  clockName: string;
  today: Date;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.today !== this.props.today) {
      const time = this.props.today.toISOString().slice(11, 19);
      // eslint-disable-next-line no-console, padding-line-between-statements
      console.log(time);
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render(): ReactNode {
    const { clockName, today } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{today.toISOString().slice(11, 19)}</span>
      </div>
    );
  }
}
