/* eslint-disable no-console */
import React from 'react';
import '../App.scss';

type ClockState = {
  time: string;
};

type ClockProps = {
  clockName: string;
};

export class Clock extends React.Component <ClockProps, ClockState> {
  timerId: number | undefined;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: { clockName: string }) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
