import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeIntervalId = 0;

  handleNewDate = () => {
    this.setState({ today: new Date().toUTCString().slice(-12, -4) });
  };

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(this.handleNewDate, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeIntervalId);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.today !== prevState.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }

    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
