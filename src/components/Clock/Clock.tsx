/* eslint-disable no-console */
import React from 'react';

type State = {
  time: Date;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date(),
  };

  timeUpdater = setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timeUpdater;
  }

  componentDidUpdate() {
    const time = this.state.time.toLocaleTimeString();

    console.log(time);
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdater);
  }

  render() {
    const time = this.state.time.toLocaleTimeString();

    return (
      <div className="clock">
        <h2 className="clock__time">
          Current time:
          {time}
        </h2>
      </div>
    );
  }
}
