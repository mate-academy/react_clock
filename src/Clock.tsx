import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | null = null;

  constructor(props: ClockProps) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      time: this.getCurrentUTCTime(),
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = this.getCurrentUTCTime();

      this.setState({ time: currentTime });

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  getCurrentUTCTime(): string {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
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
