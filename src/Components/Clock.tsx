import { Component } from 'react';

type Props = {
  clockName: string,
};

interface State {
  currentTime: Date,
  timerId: number,
}

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    const id = window.setInterval(() => {
      this.setState({ currentTime: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);

    this.setState({
      timerId: id,
    });
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName: currentClockName } = this.props;
    const { clockName: prevClockName } = prevProps;

    if (currentClockName !== prevClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${currentClockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
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
