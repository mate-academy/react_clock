import React from 'react';

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps, {}> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerClock: number = 0;

  componentDidMount() {
    this.timerClock = window.setInterval(() => {
      this.setState(() => {
        return {
          today: new Date().toUTCString().slice(-12, -4),
        };
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerClock);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
