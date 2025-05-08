import React from 'react';

type Props = {
  today: Date;
  name: string;
};

export class Clock extends React.PureComponent<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.today !== this.props.today) {
      // eslint-disable-next-line no-console
      console.log(this.props.today.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    const { today, name } = this.props;

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
