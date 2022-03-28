import React from 'react';

export class Clock extends React.Component {
  timerId?: NodeJS.Timeout;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000,
    );
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;

    return (
      <>
        Current time:
        {' '}
        {time.toLocaleTimeString()}
      </>
    );
  }
}
