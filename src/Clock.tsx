import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    // start ticking every second
    this.timerId = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: now });

      // eslint-disable-next-line no-console
      console.log(now);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // print a renaming message
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId != null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render() {
    return <span className="Clock__time">{this.state.time}</span>;
  }
}

export default Clock;
