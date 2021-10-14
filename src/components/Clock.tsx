import React from 'react';
import ClockState from '../types/ClockState';

class Clock extends React.Component<{}, ClockState> {
  timerId?: NodeJS.Timeout;

  state: ClockState = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  getCurrentTime = () => {
    this.setState({
      currentTime: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.currentTime.toLocaleTimeString());
  };

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.currentTime.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

export default Clock;
