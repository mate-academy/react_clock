/* eslint-disable no-console */
import React from 'react';

type Props = {
  today: Date;
  name: string;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevState: Readonly<Props>) {
    if (this.props.today.toUTCString().slice(-12, -4)
    !== prevState.today.toUTCString().slice(-12, -4)) {
      console.info(this.props.today.toUTCString().slice(-12, -4));
    }

    if (prevState.name.localeCompare(this.props.name) !== 0) {
      console.debug(`Renamed from ${prevState.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today, name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
