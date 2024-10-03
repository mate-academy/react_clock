import React from 'react';

type Props = {
  name: string;
  time: string;
};

// type State = {};

export class Clock extends React.Component<Props> {
  render() {
    const { name, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
