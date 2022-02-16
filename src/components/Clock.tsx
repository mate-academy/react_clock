import React from 'react';
import { setTimeout } from 'timers';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        const date: Date = new Date();

        // eslint-disable-next-line no-console
        console.log(date.toLocaleTimeString());
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000),
    });
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <p className="app__timer">
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}
