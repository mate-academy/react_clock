import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString('en-US', { hour12: false }) });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="clock app__clock">
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}
