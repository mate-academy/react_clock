import { Component } from 'react';

interface State {
  currentTime: string,
}

interface Props {
  clockName: string,
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerClock = 0;

  componentDidMount() {
    this.timerClock = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerClock);
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
          {currentTime}
        </span>
      </div>
    );
  }
}
