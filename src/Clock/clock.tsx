import React from 'react';
import { setInterval, clearInterval } from 'timers';

export class Clock extends React.Component {
  state = {
    time: '00:00:00',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div data-cy="time">
        <div className="p-2 d-flex justify-content-center">
          Current time:
          {this.state.time}
        </div>
      </div>
    );
  }
}
