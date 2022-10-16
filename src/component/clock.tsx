import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  date: number;
};

function getToday(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

function getRandomName(date: number): string {
  const value = date.toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: getToday(),
  };

  timerIdClockName = 0;

  timerIdToday = 0;

  componentDidMount(): void {
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: getToday() });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (+this.props.date - +prevProps.date > 3050) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${getRandomName(prevProps.date)}`
          + ` to ${getRandomName(this.props.date)}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdToday);
  }

  render() {
    const { today } = this.state;
    const { date } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          { getRandomName(date) }
        </strong>

        {' time is '}

        <span className="Clock__time">
          { today }
        </span>
      </div>
    );
  }
}
