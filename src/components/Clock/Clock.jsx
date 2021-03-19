import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerBreakPoint = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerBreakPoint);
  }

  render() {
    const { time } = this.state;

    return (
      <p>Current time: {time}</p>
    );
  }
}
