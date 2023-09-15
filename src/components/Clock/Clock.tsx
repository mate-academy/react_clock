import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { time: prevTime } = prevState;
    const { time: currentTime } = this.state;
    const { name: prevName } = prevProps;
    const { name: currentName } = this.props;

    if (currentTime !== prevTime) {
      // eslint-disable-next-line no-console
      console.info(this.getTime());
    }

    if (currentName !== prevName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateTime = () => {
    this.setState({ time: new Date() });
  };

  getTime = (): string => {
    return this.state.time.toUTCString().slice(-12, -4);
  };

  render() {
    const { name } = this.props;
    const time = this.getTime();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
