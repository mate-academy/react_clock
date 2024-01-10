import React from 'react';

function getRandomName(previousName: string): string {
  const value = Date.now().toString().slice(-4);

  // eslint-disable-next-line no-console
  console.debug(`Renamed from ${previousName} to ${value}`);

  return `Clock-${value}`;
}

function getCurrentTime(): string {
  const currentDate = new Date();

  return currentDate.toUTCString().slice(-12, -4);
}

type State = {
  time: string;
  clockName: string;
};

export class Clock extends React.PureComponent {
  state: State = {
    time: getCurrentTime(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  timerName = 0;

  componentDidMount(): void {
    const { clockName: previousName } = this.state;

    // This code starts a timer
    this.timerName = window.setInterval(() => {
      this.setState({ clockName: getRandomName(previousName) });
    }, 3300);

    this.timerId = window.setInterval(() => {
      const currentTime = getCurrentTime();

      // eslint-disable-next-line no-console
      console.info(currentTime);
      this.setState({ time: currentTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerName);
  }

  render(): React.ReactNode {
    const { time, clockName } = this.state;

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
