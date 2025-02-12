/* eslint-disable no-console */

import React from 'react';
import './App.scss';

type ClockProps = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
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
