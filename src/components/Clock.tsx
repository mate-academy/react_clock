import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  currentTime: Date,
};

const makeStringDate = (date: Date) => date.toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.updateClock();

      const { currentTime } = this.state;

      // eslint-disable-next-line no-console
      console.info(makeStringDate(currentTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  updateClock() {
    this.setState({ currentTime: new Date() });
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
          {makeStringDate(currentTime)}
        </span>
      </div>
    );
  }
}
