import React from 'react';
import { DELAY_TO_CHANGE_DATE } from '../../utils/vars';

type TClockProps = {
  clockName: string;
};

type TState = {
  today: Date;
};

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
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
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
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
