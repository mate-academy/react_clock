import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.secondsTracker = setInterval(() => this.refreshClock(), 1000);
  }

  refreshClock() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <span className="clock">
        {this.state.time.toLocaleTimeString('uk', 'hour12')}
      </span>
    );
  }
}

export default Clock;
