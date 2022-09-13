/* eslint-disable no-console */
import { Component, ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevDate: Props) {
    const { clockName } = this.props;

    if (clockName !== prevDate.clockName) {
      console.debug(`Renamed from ${prevDate.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): ReactNode {
    const { today } = this.state;

    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
