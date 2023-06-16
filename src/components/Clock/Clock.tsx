import { Component } from 'react';

function getTime(): string {
  const time = new Date();

  return time.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: string;
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    time: getTime(),
    clockName: this.props.name,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = getTime();

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.info(time);
    }, 1000);
    this.setState({ clockName: this.props.name });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // console.debug(`prevState - ${prevState.clockName}`);
      this.changeStateClockName();
      // eslint-disable-next-line no-console
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeStateClockName() {
    const clockName = this.props.name;

    this.setState((state, props) => {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${state.clockName} to ${props.name}`,
      );

      return {
        clockName,
      };
    });
  }

  render() {
    const { time, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
