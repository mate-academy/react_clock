import React from 'react';
import './Clock.scss';

type State = {
  currentDay: Date;
};

type Props = {
  nameOfClock: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentDay: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDay: new Date() });
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { nameOfClock } = this.props;

    if (prevProps.nameOfClock !== nameOfClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.nameOfClock} to ${nameOfClock}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentDay } = this.state;
    const { nameOfClock } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {nameOfClock}
        </strong>

        <p>time is</p>

        <span className="Clock__time">
          {currentDay.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
