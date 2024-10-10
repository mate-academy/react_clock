import React, { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  private timerId: NodeJS.Timeout | null = null;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // eslint-disable-next-line no-console
    console.log(this.state.currentTime);

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
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
