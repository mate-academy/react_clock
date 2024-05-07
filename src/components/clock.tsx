import React from 'react';

interface Props {
  clockName: string;
}

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  private timer = 0;

  updateCurrentTime = () => {
    this.setState({ currentTime: new Date() });
  };

  componentDidMount(): void {
    this.timer = window.setInterval(this.updateCurrentTime, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const currentTimeChanged = prevState.currentTime !== this.state.currentTime;
    const clockNameChanged = this.props.clockName !== prevProps.clockName;

    if (currentTimeChanged) {
      // eslint-disable-next-line no-console
      console.log(`${this.state.currentTime.toUTCString().slice(-12, -4)}`);
    }

    if (clockNameChanged) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
