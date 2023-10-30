import React from 'react';

type Props = {
  clockName: string
};
type State = {
  time: Date
};

export class ClockName extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() :void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  stopTimer() :void {
    window.clearInterval(this.timerId);
  }

  // eslint-disable-next-line react/sort-comp
  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName } = this.props;

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`prevclockName -- ${prevProps.clockName}  clockName --${clockName}`);
    }
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
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
