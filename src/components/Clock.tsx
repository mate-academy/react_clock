import { Component } from 'react';

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

  timerClockTime = 0;

  componentDidMount(): void {
    this.timerClockTime = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(
        this.state.today.toUTCString().slice(-12, -4),
      );
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerClockTime);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
