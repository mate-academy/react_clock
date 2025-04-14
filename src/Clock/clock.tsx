import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  clockValue: string;
};

export class Clock extends React.Component<Props> {
  state: State = {
    clockValue: this.getClockValue(),
  };

  timerValueId = 0;

  getClockValue(): string {
    const today = new Date();

    return today.toUTCString().slice(-12, -4);
  }

  componentDidMount = (): void => {
    this.timerValueId = window.setInterval(() => {
      this.setState({ clockValue: this.getClockValue() });
    }, 1000);
  };

  componentWillUnmount = (): void => {
    window.clearInterval(this.timerValueId);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidUpdate(prevProps: any): void {
    if (prevProps.clockName === this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(this.state.clockValue);
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;
    const { clockValue } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{clockValue}</span>
      </div>
    );
  }
}
