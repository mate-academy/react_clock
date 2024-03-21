/* eslint-disable @typescript-eslint/lines-between-class-members */
import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  timeNow: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    timeNow: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      this.setState({
        timeNow: now,
      });
      // eslint-disable-next-line no-console
      console.log(now);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.timeNow}</span>
      </div>
    );
  }
}
