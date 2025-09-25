/* eslint-disable react/state-in-constructor */
import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId?: number;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  getCurrentTime = () => new Date().toUTCString().slice(-12, -4);

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = this.getCurrentTime();

      this.setState({ time: currentTime });

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong> time is{' '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
