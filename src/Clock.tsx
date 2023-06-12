import React from 'react';

const getTimeString = (time: Date): string => time.toUTCString().slice(-12, -4);

interface ClockProps {
  clockName: string;
}

interface ClockState {
  time: Date;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    time: new Date(),
  };

  timeIntervalID = 0;

  componentDidMount() {
    this.timeIntervalID = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.info(getTimeString(this.state.time));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeIntervalID);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        <span>
          {' time is '}
        </span>

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
