import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: 0,
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const date = new Date();

    this.setState({
      date: date.toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {date}
      </p>
    );
  }
}

export default Clock;
