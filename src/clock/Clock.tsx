/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentDate: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentDate: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { clockName: prevClockName }: Readonly<Props>,
    { currentDate: prevDate }: Readonly<State>,
  ): void {
    const { clockName } = this.props;
    const { currentDate: today } = this.state;

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
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
