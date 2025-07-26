import React from 'react';
import { ClockProps, ClockStates } from '../types/types';

export class Clock extends React.Component<ClockProps> {
  state: ClockStates = {
    today: new Date(),
    currentTimer: 0,
  };

  componentDidMount(): void {
    const currentTimer = window.setInterval(() => {
      const newTime = new Date();

      this.setState({ today: newTime });

      // eslint-disable-next-line no-console
      console.log(`${newTime.toUTCString().slice(-12, -4)}`);
    }, 1000);

    this.setState({ currentTimer });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.currentTimer);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
