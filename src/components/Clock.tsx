import React from 'react';

type Props = {
  clockName: string;
  showClock: boolean;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  updateClock = () => {
    this.setState({ time: new Date() }, () =>
      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4)),
    );
  };

  componentDidMount(): void {
    if (this.props.showClock) {
      this.timerId = window.setInterval(this.updateClock, 1000);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
