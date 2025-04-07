import { Component } from 'react';

type Props = {
  name: string;
  time: Date;
};

export class Clock extends Component<Props> {
  render() {
    const { name, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
