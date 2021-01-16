import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  render() {
    const { time } = this.state;

    return (
      <span
        className="Clock"
      >
        {time}
      </span>
    );
  }
}
