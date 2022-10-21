import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  clockTime: Date;
};

const timeToString = (date: Date) => date.toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state = {
    clockTime: new Date(),
  };

  timeIntervalId = 0;

  componentDidMount() {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({
        clockTime: new Date(),
      });

      const { clockTime } = this.state;

      // eslint-disable-next-line no-console
      console.info(timeToString(clockTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if ((clockName !== prevProps.clockName)) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeIntervalId);
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
          {timeToString(clockTime)}
        </span>
      </div>
    );
  }
}
