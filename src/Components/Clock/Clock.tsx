import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

const normalizedDate = (date: Date) => date.toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  timerIdClockValue: number | undefined;

  state: State = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.timerIdClockValue = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(normalizedDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>)
    : void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdClockValue);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {normalizedDate(today)}
        </span>
      </div>
    );
  }
}
