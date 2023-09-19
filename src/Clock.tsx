/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId: number | undefined = undefined;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.startClockUpdate();
  }

  componentWillUnmount() {
    this.stopClockUpdate();
  }

  startClockUpdate() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      console.info(`${this.state.date.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  stopClockUpdate() {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{date.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
