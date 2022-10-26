import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { name: currentClockName } = this.props;
    const { name: prevClockName } = prevProps;
    const { today: currentToday } = this.state;
    const { today: prevToday } = prevState;

    if (currentClockName !== prevClockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevClockName} to ${currentClockName}`);
    }

    if (currentToday !== prevToday) {
      // eslint-disable-next-line
      console.info(prevToday.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;
    const timeString = today.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          { name }
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
