import React from 'react';
type State = {
  today: Date;
  clockName: string;
};
type Props = {
  clockName: string;
};
export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
    clockName: this.props.clockName,
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.clockName !== this.props.clockName) {
      this.setState({ clockName: this.props.clockName });
    }

    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }

    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
