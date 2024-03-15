import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  interval = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });

    this.interval = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.getTimeFromDate(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevClockName = prevProps.clockName;
    const currentClockName = this.props.clockName;

    if (currentClockName !== prevClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${currentClockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }

  getTimeFromDate = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.getTimeFromDate(date)}</span>
      </div>
    );
  }
}
