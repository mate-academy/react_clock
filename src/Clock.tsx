/* eslint-disable padding-line-between-statements */
// src/Clock.tsx
import React, { Component } from 'react';

interface ClockProps {
  name: string;
}

class Clock extends Component<ClockProps> {
  private timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);
      // eslint-disable-next-line no-console
      console.log(currentTime);
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const currentTime = new Date().toUTCString().slice(-12, -4);

    return (
      <div className="Clock" data-testid="clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}

export default Clock;
