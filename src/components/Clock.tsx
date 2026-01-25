import React from 'react';

function getDayTime(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

interface ClockProps {
  clockName: string;
}

interface ClockState {
  today: Date;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state: Readonly<ClockState> = {
    today: new Date(),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
  }

  componentDidUpdate(
    prevProps: Readonly<ClockProps>,
    prevState: Readonly<ClockState>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(getDayTime(this.state.today));
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{getDayTime(this.state.today)}</span>
      </div>
    );
  }
}
