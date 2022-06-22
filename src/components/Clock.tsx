/* eslint-disable no-console */
import React from 'react';

type Props = {};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(
      () => this.showClock(),
      1000,
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  showClock() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const { time } = this.state;

    return (
      <p data-cy="time">
        Current time:
        <br />
        {time.toLocaleTimeString()}
        {console.log(time.toLocaleTimeString())}
      </p>
    );
  }
}
