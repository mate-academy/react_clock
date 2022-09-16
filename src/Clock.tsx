import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string;
};

// comment

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { clockName: nextClockName } = this.props;
    const { clockName: prevClockName } = prevProps;
    const { today: nextToday } = this.state;
    const { today: prevtToday } = prevState;

    if (nextClockName !== prevClockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevClockName} to ${nextClockName}`);
    }

    if (nextToday !== prevtToday) {
      // eslint-disable-next-line
      console.info(nextToday.toLocaleTimeString());
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
