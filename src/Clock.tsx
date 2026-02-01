import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId?: number;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    // Start the timer when component is added to the page
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      // Print time to console every second
      // eslint-disable-next-line no-console
      console.log(newTime);

      this.setState({
        currentTime: newTime,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // Detect when the name prop changes
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    // Stop the timer when component is removed from the page
    window.clearInterval(this.timerId);
  }

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
