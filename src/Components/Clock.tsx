/* eslint-disable no-console */
import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private intervalId: NodeJS.Timeout | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.cycle();
    }, 1000);
  }

  cycle() {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: currentTime });
    // eslint-disable-next-line no-console
    console.log('Current time:', currentTime);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        {this.state.time} {this.props.name}
      </div>
    );
  }
}
