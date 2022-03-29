import React from 'react';
import './Clock.scss';

type State = {
  time: Date;
};

export class Clock extends React.Component<{}, State> {
  timerId?: NodeJS.Timeout;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000,
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;

    return (
      <>
        {time.toLocaleTimeString()}
      </>
    );
  }
}
