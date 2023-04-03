import { Component } from 'react';

type State = {
  currentTime: Date,
};

type Props = {
  clockName: string;
};

const avoidingTimezoneIssues = (time: Date) => {
  return time.toUTCString().slice(-12, -4);
};

export class CLock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });

      window.console.info(avoidingTimezoneIssues(this.state.currentTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      window.console.debug(
        `Renamed from ${prevProps.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {avoidingTimezoneIssues(currentTime)}
        </span>
      </div>
    );
  }
}
