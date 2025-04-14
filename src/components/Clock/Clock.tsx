import React from 'react';

type Props = {
  clockName: string;
  today: string;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.today !== this.props.today) {
      // eslint-disable-next-line no-console
      console.log(this.props.today);
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName, today } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
