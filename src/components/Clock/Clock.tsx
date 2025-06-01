// Clock.tsx
import React, { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends Component<ClockProps, ClockState> {
  private timeInterval: NodeJS.Timeout | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    // Start the timer when component mounts
    this.timeInterval = setInterval(() => {
      const now = new Date();
      const timeString = now.toUTCString().slice(-12, -4);

      this.setState({ time: timeString });

      // Print time to console
      // eslint-disable-next-line no-console
      console.log(timeString);
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up timer when component unmounts
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }
  }

  render() {
    return (
      <div className="Clock">
        <div className="Clock__time">{this.state.time}</div>
        <div className="Clock__name">{this.props.name}</div>
      </div>
    );
  }
}

export default Clock;
