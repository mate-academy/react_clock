import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
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
