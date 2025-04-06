import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  // Initialize state as a class property
  state: ClockState = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: number | undefined;

  componentDidMount() {
    // Start a timer to update the time every second
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toLocaleTimeString();

      this.setState({ time: newTime });

      // Log the current time to the console
      // eslint-disable-next-line no-console
      console.log(`Time updated to ${newTime}`);
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong>{name}</strong>
        <p>{time}</p>
      </div>
    );
  }
}

export default Clock;
