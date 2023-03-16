import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

const dateFormat = (value: Date) => value.toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      window.console.info(dateFormat(this.state.date));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      window.console.debug(`Rename from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {dateFormat(date)}
        </span>
      </div>
    );
  }
}
