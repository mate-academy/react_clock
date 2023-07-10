import { Component } from 'react';
import { clearInterval } from 'timers';

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

export class Clock extends Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      window.console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
