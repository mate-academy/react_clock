import { Component } from 'react';

interface ClockState {
  currentTime: string;
}

interface ClockProps {
  clockName: string;
}

export default class Clock extends Component<ClockProps> {
  private timerId: number | undefined = undefined;

  state: ClockState = {
    currentTime: this.getCurrentTime(),
  };

  getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.tick();
      // eslint-disable-next-line no-console
      console.log(this.getCurrentTime());
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: this.getCurrentTime(),
    });
  }

  render() {
    return (
      <div className="Clock">
        {/* eslint-disable-next-line no-console, max-len */}
        <strong className="Clock__name">{this.props.clockName}</strong> time is{' '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
