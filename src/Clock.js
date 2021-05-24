import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getClock() {
    if (this.state.isClockVisible) {
      return this.state.time;
    }

    return null;
  }

  startClock() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString('en-GB'),
      });
      window.console.log(this.state.time);
    }, 1000);
  }

  render() {
    return this.state.time;
  }
}

export default Clock;
