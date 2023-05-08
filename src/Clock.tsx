import { Component } from 'react';

type ClockProps = {
  clockName: string,
};

type State = {
  today: string,
};

const getDate = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends Component<ClockProps, State> {
  timerId = 0;

  state = {
    today: getDate(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getDate() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today}`);
    }, 1000);
  }

  componentDidUpdate(previousProps: ClockProps) {
    if (previousProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${previousProps.clockName} to ${this.props.clockName}`);
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
          {today}
        </span>
      </div>
    );
  }
}
