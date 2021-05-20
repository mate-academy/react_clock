import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <span>
        {time}
      </span>
    );
  }
}
