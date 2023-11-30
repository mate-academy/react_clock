/* eslint-disable no-console */

import React from 'react';

type State = {
  time: Date
};

export interface ClockProps {
  name: string
}

export class Clock extends React.Component <ClockProps, State> {
  state = {
    time: new Date(),
  };

  timerId: any = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
