import React from 'react';

type ClockProps = {
  clockName: string,
};

type State = {
  current: string,
  timerId: number | null,
};

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    current: new Date().toUTCString().slice(-12, -4),
    timerId: 0,
  };

  componentDidMount(): void {
    this.getTime();
  }

  componentDidUpdate(prevProps: ClockProps): void {
    const oldClockSuffix = prevProps.clockName;
    const newClockSuffix = this.props.clockName;

    if (oldClockSuffix !== newClockSuffix) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldClockSuffix} to ${newClockSuffix}`);
    }
  }

  componentWillUnmount(): void {
    this.stopTime();
  }

  getCurrent = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    if (this.state.timerId !== null && this.state.timerId !== undefined) {
      this.setState({ current: currentTime });
    }
  };

  getTime = () => {
    const timerTime = window.setInterval(() => {
      this.getCurrent();
      // eslint-disable-next-line no-console
      console.info(this.state.current);
    }, 1000);

    this.setState({ timerId: timerTime });
  };

  stopTime = () => {
    if (this.state.timerId !== null && this.state.timerId !== undefined) {
      window.clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.current}
        </span>
      </div>
    );
  }
}
