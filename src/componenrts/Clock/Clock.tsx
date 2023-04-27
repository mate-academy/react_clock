/* eslint-disable no-console */
import React from 'react';

interface ClockState {
  today: Date;
}

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    today: new Date(),
  };

  timeNow = 0;

  componentDidMount() {
    this.timeNow = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info((this.state.today).toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<ClockProps>,
  ) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeNow);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
