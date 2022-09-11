/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { clockName: prevClockName }: Readonly<Props>,
    { today: prevDate }: Readonly<State>,
  ): void {
    const { clockName } = this.props;
    const { today } = this.state;

    if (prevClockName !== clockName) {
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }

    if (prevDate !== today) {
      console.info(today.toLocaleTimeString());
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

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
