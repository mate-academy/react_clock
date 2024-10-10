/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
  hasClock: boolean;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  intervalForTime = 0;

  componentDidMount(): void {
    this.intervalForTime = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: newDate });

      if (this.props.hasClock) {
        console.log(newDate);
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalForTime);
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.today}</span>{' '}
      </div>
    );
  }
}
