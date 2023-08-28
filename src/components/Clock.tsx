/* eslint-disable no-console */

import React from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    console.info(this.state.time.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">

        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
