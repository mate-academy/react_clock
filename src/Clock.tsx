import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  clockName: string,
};

const formatedDate = (): string => {
  return new Date().toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state = {
    today: formatedDate(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: formatedDate() });

      const { today } = this.state;

      // eslint-disable-next-line no-console
      console.info(today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
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
          {today}
        </span>
      </div>
    );
  }
}
