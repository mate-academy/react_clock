// src/components/Clock.tsx
import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private intervalId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime); // Лог времени каждую секунду
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
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
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
