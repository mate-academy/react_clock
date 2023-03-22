import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

const formatTime = (time: Date) => {
  return time.toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerCountId = 0;

  componentDidMount() {
    this.timerCountId = window.setInterval(() => {
      this.setState({ today: new Date() });
      window.console.info(formatTime(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerCountId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatTime(today)}
        </span>
      </div>
    );
  }
}
