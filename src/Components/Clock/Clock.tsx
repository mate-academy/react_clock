/* eslint-disable no-console */
import React from 'react';

type State = {
  date: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();

      this.setState({ date: currentDate });
      console.log(currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    const { clockName } = this.props;
    const prevName = prev.clockName;
    const newName = clockName;

    if (prevName !== newName) {
      console.log(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
