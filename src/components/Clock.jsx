import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <span>{time.toLocaleTimeString()}</span>
    );
  }
}

export default Clock;
