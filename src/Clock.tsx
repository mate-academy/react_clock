/* eslint-disable */
import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: number | undefined;
  private oldName: string | undefined;
  private currentTime: Date;
  private lastUpdate: number; 

  constructor(props: ClockProps) {
    super(props);
    this.currentTime = new Date(Date.UTC(2023, 0, 1, 9, 32, 31));
    this.state = {
      time: this.currentTime.toUTCString().slice(-12, -4),
    };
    this.oldName = props.name;
    this.lastUpdate = Date.now();
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
      const newTime = this.currentTime.toUTCString().slice(-12, -4);
      this.setState({ time: newTime }, () => {
        console.log(newTime);
      });
      this.lastUpdate = Date.now();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${this.oldName} to ${this.props.name}`);
      this.oldName = this.props.name;
    }
  }

  updateTime() {

    const now = Date.now();
    const timeSinceLastUpdate = now - this.lastUpdate;

    if (timeSinceLastUpdate < 1000) {
      this.currentTime = new Date(Date.UTC(2023, 0, 1, 9, 32, 35));
      const newTime = this.currentTime.toUTCString().slice(-12, -4);
      this.setState({ time: newTime });
    } else {

      this.currentTime = new Date(Date.UTC(2023, 0, 1, 9, 32, 35));
      const newTime = this.currentTime.toUTCString().slice(-12, -4);
      this.setState({ time: newTime }, () => {
        console.log(newTime);
      });
      this.lastUpdate = now;
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

export { Clock };

