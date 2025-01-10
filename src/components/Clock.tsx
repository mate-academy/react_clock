// Clock.tsx
import React from 'react';

// #region State and Props
type ClockProps = {
  clockName: string;
};

type ClockState = {
  today: Date;
};
// #endregion State and Props

export default class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId: NodeJS.Timeout | undefined = undefined;

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

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
