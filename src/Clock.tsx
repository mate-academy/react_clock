/* eslint-disable no-console */
import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
  prevName: string | null;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: NodeJS.Timeout | undefined;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
    prevName: null,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      console.log(currentTime);
      this.setState({ currentTime });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (this.props.name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
