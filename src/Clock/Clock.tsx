import React from 'react';

type Props = {};

type State = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
  };

  timerId = 0;

  timerName = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(new Date().toLocaleString().slice(12, 20));
    }, 1000);

    this.timerName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>, prevState: Readonly<State>,
  ): void {
    // eslint-disable-next-line no-console
    console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerName);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { clockName } = this.state;
    const today = new Date();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
