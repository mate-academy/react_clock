/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  hasClock: boolean,
  clockName: string,
};

type State = {
  clockTime: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    clockTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.info(this.state.clockTime.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { clockTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {clockTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
