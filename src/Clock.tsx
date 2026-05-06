import React from 'react';

type State = {
  time: number;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: Date.now(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const time = Date.now();

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.log(new Date(time).toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    return null;
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {` time is `}
        <span className="Clock__time">
          {new Date(this.state.time).toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
