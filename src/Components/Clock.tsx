import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setInterval(() => { }, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <p className="clock__time">
        Current time:
        <br />
        {this.state.time}
      </p>
    );
  }
}

export default Clock;
