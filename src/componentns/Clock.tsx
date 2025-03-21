import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: getCurrentTime(),
  };

  timerId: number = 0;

  startTimer = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getCurrentTime() });
    }, 1000);
  };

  clearTimer = () => {
    window.clearInterval(this.timerId);
    this.timerId = 0;
  };

  componentDidMount(): void {
    this.startTimer();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }
  }

  componentWillUnmount(): void {
    this.clearTimer();
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
