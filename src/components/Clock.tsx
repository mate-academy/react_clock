import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  clockTime: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    clockTime: new Date(),
  };

  timeIntervalId = 0;

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({ clockTime: new Date() });

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
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
    clearInterval(this.timeIntervalId);
  }

  render() {
    const { clockName } = this.props;
    const { clockTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {clockTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
