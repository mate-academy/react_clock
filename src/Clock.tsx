import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

function formatDate(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component <Props, State> {
  state: State = {
    time: new Date(),
  };

  timerInterval = 0;

  componentDidMount() {
    this.timerInterval = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.info(formatDate(this.state.time));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerInterval);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatDate(time)}
        </span>
      </div>
    );
  }
}
