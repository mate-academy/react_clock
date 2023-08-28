/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string,
};

let timerId: number;

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  componentDidMount(): void {
    const timerIdInternal = window.setInterval(() => {
      this.setState({ time: new Date() });
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);

    timerId = timerIdInternal;
  }

  componentWillUnmount(): void {
    window.clearInterval(timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
