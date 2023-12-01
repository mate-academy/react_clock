import { Component } from 'react';

import { ClockProps, ClockState } from '../types/ClockTypes';

// let timerId: number;

export class Clock extends Component<ClockProps, ClockState> {
  state = { time: new Date(), timerId: 0 };

  componentDidMount() {
    const timerId = window.setInterval(
      () => {
        this.setState({ time: new Date() });
        // eslint-disable-next-line no-console
        console.info(this.state.time.toUTCString().slice(-12, -4));
      }, 1000,
    );

    this.setState({ timerId });
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
