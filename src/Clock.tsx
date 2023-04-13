/* eslint-disable no-console */
import React from 'react';

type Props = {
  today: Date;
  name: string;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevState: Readonly<Props>) {
    const currentDate = this.props.today.toUTCString().slice(-12, -4);
    const prevDate = prevState.today.toUTCString().slice(-12, -4);
    const prevName = prevState.name;
    const currentName = this.props.name;

    if (currentDate !== prevDate) {
      console.info(currentDate);
    }

    if (prevName.localeCompare(currentName) !== 0) {
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  render(): JSX.Element {
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
