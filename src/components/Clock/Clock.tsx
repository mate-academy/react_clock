import React from 'react';

type Props = {
  state: {
    hasClock: boolean;
    clockName: string;
    today: Date;
  };

  time: string;
};

export class Clock extends React.Component<Props, {}> {
  render(): React.ReactNode {
    const { state, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
