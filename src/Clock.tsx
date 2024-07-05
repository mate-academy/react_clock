import React, { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

class Clock extends Component<ClockProps, ClockState> {
  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.startClock();
  }

  componentDidUpdate(prevProps: ClockProps, prevState: ClockState) {
    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    this.clearClock();
  }

  startClock = () => {
    this.clearClock();
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
    }, 1000);
  };

  clearClock = () => {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
      this.timerId = undefined;
    }
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}

export default Clock;
