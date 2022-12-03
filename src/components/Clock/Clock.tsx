import { Component } from 'react';

type State = {
  currentTime: Date;
};

export class Clock extends Component<{ clockName: string }, State> {
  state: State = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: { clockName: string }) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
