/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });

      console.log(date);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;
    const timeString = date.toLocaleTimeString();

    return (
      <>
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {timeString}
        </span>
      </>

    );
  }
}
