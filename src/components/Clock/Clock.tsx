import { Component } from 'react';

function getToday(): string {
  return new Date().toLocaleTimeString();
}

type State = {
  time: string,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    time: getToday(),
  };

  todayId = 0;

  componentDidMount() {
    this.todayId = window.setInterval(() => {
      this.setState({ time: getToday() });
      // eslint-disable-next-line
      console.info(getToday());
    }, 1000);
  }

  componentDidUpdate({ name: OldClockName } : Props) {
    const { name: ClockName } = this.props;

    if (OldClockName !== ClockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${OldClockName} to ${ClockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.todayId);
  }

  render() {
    const { name: ClockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {ClockName}
        </strong>

        {' time is '}

        <span className="Clock__time">

          {time}
        </span>
      </div>
    );
  }
}
