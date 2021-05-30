import React, { Component } from 'react';

import './Clock.scss';

class Clock extends Component {
  state = {
    date: new Date(),
  }

  timerLog = setInterval(() => {
    this.setState({ date: new Date() });
    const { date } = this.state;

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000)

  componentDidMount() {
    return this.timerLog;
  }

  componentWillUnmount() {
    clearInterval(this.timerLog);
  }

  render() {
    const { date } = this.state;

    return (
      <span className="Clock">
        { date.toLocaleTimeString()}
      </span>
    );
  }
}

export default Clock;
