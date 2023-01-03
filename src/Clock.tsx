/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string
};

type State = {
  time: Date
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      console.info(today.toUTCString().slice(-12, -4));
      this.setState({ time: today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
