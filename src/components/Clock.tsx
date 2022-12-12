/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  date: Date;
};

export default class Clock extends Component<Props, State> {
  myInterval = 0;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.myInterval = window.setInterval(
      () => {
        this.setState({ date: new Date() });

        if (this.props.hasClock === true) {
          console.info(this.state.date.toUTCString().slice(-12, -4));
        }
      },
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

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
