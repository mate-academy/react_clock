/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
    clockSuffix: '',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const hours = this.state.today.getUTCHours();

      this.state.clockSuffix = hours >= 12 ? 'PM' : 'AM';
      this.setState({ today: new Date() });

      console.info(
        this.state.today.toUTCString().slice(-12, -4),
        this.state.clockSuffix,
      );
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName: currentClockName } = prevProps;
    const { clockName: nextClockName } = this.props;

    if (currentClockName !== nextClockName) {
      console.debug(`Renamed from ${currentClockName} to ${nextClockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
          {' '}
          {this.state.clockSuffix}
        </span>
      </div>
    );
  }
}
