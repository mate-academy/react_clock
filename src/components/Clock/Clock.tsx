import { Component } from 'react';

function getToday(): string {
  return new Date().toLocaleTimeString();
}

type State = {
  time: string,
};

type Props = {
  clockName: string,
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

  componentDidUpdate({ clockName: oldClockName } : Props) {
    const { clockName } = this.props;

    if (oldClockName !== clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${oldClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.todayId);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

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
