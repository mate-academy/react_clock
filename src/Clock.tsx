import React from 'react';
import './App.scss';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  intervalId: number | undefined = undefined;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.updateTime(); // Call the function to set initial time

    this.intervalId = window.setInterval(() => {
      this.updateTime(); // Update time within the interval
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ currentTime });
  };

  render() {
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
