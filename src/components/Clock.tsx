import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = this.setTimerForDate();
  }

  componentDidUpdate(prevProps: Props) {
    const prevClockName = prevProps.clockName;
    const currenClockName = this.props.clockName;

    if (prevClockName !== currenClockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevClockName} to ${currenClockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  setTimerForDate = () => {
    return window.setInterval(() => {
      this.setState({ date: new Date() });
      this.showInConsole();
    }, 1000);
  };

  showInConsole = () => {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  };

  render() {
    const { clockName } = this.props;
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
