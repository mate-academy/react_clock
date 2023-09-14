import React from 'react';
import { DELAY_TO_CHANGE_DATE } from '../../utils/vars';

type TClockProps = {
  clockName: string;
};

type TState = {
  today: Date;
};

function getTodayInUTC(today: Date) {
  return today.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<TClockProps, TState> {
  state = {
    today: new Date(),
  };

  todayTimerId = 0;

  componentDidMount(): void {
    this.startTimerDate();
  }

  componentDidUpdate(
    prevProps: Readonly<TClockProps>,
    prevState: Readonly<TState>,
  ): void {
    const { clockName } = this.props;
    const { today } = this.state;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }

    if (prevState.today !== today) {
      // eslint-disable-next-line no-console
      console.info(getTodayInUTC(today));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayTimerId);
  }

  startTimerDate = () => {
    this.todayTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, DELAY_TO_CHANGE_DATE);
  };

  render(): React.ReactNode {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getTodayInUTC(this.state.today)}
        </span>
      </div>
    );
  }
}
