import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | undefined;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const nextTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: nextTime });
      // eslint-disable-next-line no-console
      console.log(nextTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
