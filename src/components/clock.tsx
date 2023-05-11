import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
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

  handleClick = () => {
    const today = new Date();

    this.setState({ today });
  };

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        <span>{' time is '}</span>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
