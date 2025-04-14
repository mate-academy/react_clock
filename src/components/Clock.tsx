import { Component } from 'react';
/* eslint-disable */

export class Clock extends Component<{ name: string }, { time: string }> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  intervalId: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(
        {
          time: new Date().toUTCString().slice(-12, -4),
        },
        () => {
          console.log(this.state.time);
        },
      );
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
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
