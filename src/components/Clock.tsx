import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

function getCurrentFormattedTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: getCurrentFormattedTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newDate = getCurrentFormattedTime();

      // eslint-disable-next-line no-console
      console.log(newDate);
      this.setState({ time: newDate });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
