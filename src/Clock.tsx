import React, { Component } from 'react';

interface ClockName {
  clockName: string;
}

interface ClockState {
  time: string;
  firstUpdate: boolean;
}

class Clock extends Component<ClockName, ClockState> {
  timerId?: NodeJS.Timeout;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
    firstUpdate: true,
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    const currentTime = new Date().toUTCString().slice(-12, -4);
    // eslint-disable-next-line no-console
    console.log(currentTime);

    this.setState({
      time: currentTime,
      firstUpdate: false,
    });
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}

export default Clock;
