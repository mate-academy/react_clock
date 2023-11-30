import React from 'react';

  type ClockProps = {
    clockName: string;
    hasClock: boolean;
  };

  type State = {
    today: string;
  };

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  renewalData = 0;

  componentDidMount(): void {
    this.renewalData = window.setInterval(() => {
      this.addDate();
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  addDate = () => {
    this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    // eslint-disable-next-line no-console
    console.info(this.state.today);
  };

  componentWillUnmount(): void {
    window.clearInterval(this.renewalData);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
