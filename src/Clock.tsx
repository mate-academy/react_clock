/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.clockName;
    const newName = this.props.clockName;

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
