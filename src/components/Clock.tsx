import { Component } from 'react';
import './Clock.scss';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerForClockId = 0;

  componentDidMount() {
    this.timerForClockId = window.setInterval(() => {
      const { today } = this.state;

      this.setState({ today: new Date() });

      // eslint-disable-next-line
      console.info(today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;
    const { clockName: prevClockName } = prevProps;

    if (clockName !== prevClockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerForClockId);
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
