import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.formatTime(this.state.date));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  formatTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          { this.formatTime(date) }
        </span>
      </div>
    );
  }
}
