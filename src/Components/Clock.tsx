import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  currentTime: Date,
};

export class Clock extends Component<Props, State> {
  state = {
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

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName: currentClockName } = this.props;
    const { clockName: prevoiusClockName } = prevProps;

    if (currentClockName !== prevoiusClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevoiusClockName} to ${currentClockName}`);
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
