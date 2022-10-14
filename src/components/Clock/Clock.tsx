import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  dateTimerId = 0;

  componentDidMount() {
    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    return (
      (clockName !== prevProps.clockName)
      // eslint-disable-next-line no-console
      && (console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`))
    );
  }

  componentWillUnmount() {
    clearInterval(this.dateTimerId);
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
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
