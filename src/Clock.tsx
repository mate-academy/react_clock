/* eslint-disable no-console */
import React from 'react';

export class Clock extends React.Component {
  state = {
    timer: '',
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      this.setState({ timer: (new Date()).toLocaleTimeString() });

      console.log((new Date()).toLocaleTimeString());
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <div>
        Current time:
        {' '}
        {this.state.timer}
      </div>
    );
  }
}
