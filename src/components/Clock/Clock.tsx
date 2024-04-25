import React from 'react';

type Props = {
  name: string;
  date: Date;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.props.date.toUTCString().slice(-12, -4));
  }

  render() {
    const { name, date } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{date.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
