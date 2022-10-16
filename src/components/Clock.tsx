import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  clockTime: Date,
};

const timeNormalize = (date: Date) => date.toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    clockTime: new Date(),
  };

  timeIntervalId = 0;

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({ clockTime: new Date() });

      const { clockTime } = this.state;

      // eslint-disable-next-line no-console
      console.info(timeNormalize(clockTime));
    }, 1000);
  }

  componentWillUnmount(): void {
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
          {timeNormalize(clockTime)}
        </span>
      </div>
    );
  }
}
