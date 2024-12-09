import React from 'react';

type Props = {
  clockName: string;
  isClockVisible: boolean;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  };

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      if (this.props.isClockVisible) {
        // eslint-disable-next-line no-console
        console.warn(
          `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
        );
      }
    }
  }

  dateId = 0;

  componentDidMount(): void {
    this.dateId = window.setInterval(() => {
      this.setState({ today: new Date() });
      if (this.props.isClockVisible) {
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}{' '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
