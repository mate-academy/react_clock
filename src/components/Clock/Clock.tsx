import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });

      window.console.info(this.getCurrentTime());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName: oldClockName } = prevProps;
    const { clockName: newClockName } = this.props;

    if (oldClockName !== newClockName) {
      window.console.debug(`Renamed from ${oldClockName} to ${newClockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  getCurrentTime(): string {
    return this.state.date.toUTCString().slice(-12, -4);
  }

  render(): JSX.Element {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getCurrentTime()}
        </span>
      </div>
    );
  }
}
