import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string;
  currentTime: string;
};

export class Clock extends React.Component<Props> {
  render() {
    const { clockName, currentTime } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
