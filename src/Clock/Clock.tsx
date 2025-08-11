import React, { Component } from 'react';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  private intervalId: number | null = null;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
