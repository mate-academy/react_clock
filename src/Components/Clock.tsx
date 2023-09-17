import React from 'react';

interface ClockProps {
  clockName: string;
}

interface ClockState {
  today: Date;
}

export class Clock extends React.PureComponent<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.startClockNameTimer();
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    this.stopClockNameTimer();
  }

  startClockNameTimer() {
    this.timerId = window.setInterval(() => {
      const newToday = new Date();

      this.setState(() => ({ today: newToday }));

      // eslint-disable-next-line no-console
      console.info(newToday.toUTCString().slice(-12, -4));
    }, 1000);
  }

  stopClockNameTimer() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
