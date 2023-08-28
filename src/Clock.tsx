/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string,
  hasClock: boolean,
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
    timerId: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
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
