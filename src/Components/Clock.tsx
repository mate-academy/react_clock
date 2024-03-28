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
    console.log(currentTime);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
