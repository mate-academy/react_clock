import React from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
