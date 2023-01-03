/* eslint-disable no-console */
import React from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      console.info(today.toUTCString().slice(-12, -4));
      this.setState({ date: today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const {
      clockName,
    } = this.props;

    if (clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const {
      date,
    } = this.state;

    const {
      clockName,
    } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
