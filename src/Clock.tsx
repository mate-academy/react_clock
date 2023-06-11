import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockState {
  time: Date;
  clockName: string;
}

export class Clock extends React.Component<{}, ClockState> {
  timeIntervalID: NodeJS.Timeout | null = null;

  clockNameIntervalID: NodeJS.Timeout | null = null;

  state: ClockState = {
    time: new Date(),
    clockName: 'clock0',
  };

  componentDidMount() {
    this.timeIntervalID = setInterval(this.updateTime, 1000);
    this.clockNameIntervalID = setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    if (this.timeIntervalID) {
      clearInterval(this.timeIntervalID);
    }

    if (this.clockNameIntervalID) {
      clearInterval(this.clockNameIntervalID);
    }
  }

  updateTime = () => {
    this.setState({ time: new Date() });
  };

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
