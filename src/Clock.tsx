/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    currentDate: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentDate: newDate });
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentDate}</span>
      </div>
    );
  }
}
