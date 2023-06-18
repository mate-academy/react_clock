import React from 'react';

type ClockState = {
  today: Date
};

type ClockProps = {
  name: string
};

export class Clock extends React.Component<ClockProps, ClockState> {
  value = Date.now().toString().slice(-4);

  state: Readonly<ClockState> = {
    today: new Date(),
  };

  timeIntervalId = 0;

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({ today: new Date() });
      window.console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (this.props.name !== prevProps.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeIntervalId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
          {/* text "time is" should not be placed in span.Clock__time element */}
        </span>
      </div>
    );
  }
}
