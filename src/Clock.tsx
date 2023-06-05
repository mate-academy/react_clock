import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
  previousClockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerForDate = 0;

  timerForClockinfo = 0;

  componentDidMount() {
    this.timerForDate = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.props.previousClockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerForDate);
    clearInterval(this.timerForClockinfo);
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
