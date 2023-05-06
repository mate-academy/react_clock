/* eslint-disable no-console */
import React from 'react';

type Props = {
  randomName: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  today = new Date();

  intervalId = 0;

  state = {
    time: this.getRecentTime(),
  };

  componentDidMount(): void {
    this.setState({ time: this.getRecentTime() });

    this.intervalId = window.setInterval(() => {
      this.setState({ time: this.getRecentTime() });
      console.info(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
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
