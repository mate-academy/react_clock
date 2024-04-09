import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  timerClock = 0;

  componentDidMount(): void {
    this.timerClock = window.setInterval(() => {
      const currentDate = new Date();

      this.setState({
        today: currentDate,
      });

      // eslint-disable-next-line no-console
      console.log(currentDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerClock);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
