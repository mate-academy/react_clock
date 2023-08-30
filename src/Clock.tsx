/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timer: number | undefined;

  componentDidMount(): void {
    this.timer = window.setInterval(this.handleDocumentTime, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    console.info(`${this.state.time.toUTCString().slice(-12, -4)}`);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  handleDocumentTime = () => {
    this.setState({ time: new Date() });
  };

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
