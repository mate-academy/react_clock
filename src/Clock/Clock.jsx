import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date()
  };

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    return (
      <h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

export default Clock;
