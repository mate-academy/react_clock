/* eslint-disable no-console */
import React from 'react';

type Props = {
  randomName: string,
};

type State = {
  time: string,
  intervalId: number
};

export class Clock extends React.Component<Props, State> {
  today = new Date();

  state = {
    time: this.getRecentTime(),
    intervalId: 0,
  };

  componentDidMount(): void {
    this.setState({ time: this.getRecentTime() });

    this.state.intervalId = window.setInterval(() => {
      this.setState({ time: this.getRecentTime() });
      console.info(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.state.intervalId);
  }

  getRecentTime() {
    this.today = new Date();

    return this.today.toUTCString().slice(-12, -4);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.randomName}
        </strong>
        <span> time is </span>
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
