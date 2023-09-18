import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  currentTime: Date,
};

const normalizeTime = (currentTime: Date) => {
  return currentTime.toUTCString().slice(-12, -4);
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    currentTime: new Date(),
  };

  currentTimerId = 0;

  componentDidMount(): void {
    this.currentTimerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { clockName: prevClockName }: Readonly<Props>,
    { currentTime: prevCurrentTime }: Readonly<State>,
  ): void {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    if (clockName !== prevClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }

    if (currentTime !== prevCurrentTime) {
      // eslint-disable-next-line no-console
      console.info(`${normalizeTime(currentTime)}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.currentTimerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {normalizeTime(currentTime)}
        </span>
      </div>
    );
  }
}
