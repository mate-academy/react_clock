import React, { Component } from 'react'

interface ClockState {
  currentTime: string;
}

interface ClockProps {
  clockName: string;
}

export class Clock extends Component<ClockProps> {
  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: number | undefined;

  updateCurrentTime = () => {
    // if (this.state.hasClock) {
      const currentTime = new Date().toUTCString().slice(-12, -4);
      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.updateCurrentTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
    <strong className="Clock__name">{clockName}</strong>
    {' time is '}
    <span className="Clock__time">{this.state.currentTime}</span>
  </div>
    )
  }
}
