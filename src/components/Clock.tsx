import React from 'react';

type Props = { clockName: string };
type State = { time: string };

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  getCurrentTime = () => new Date().toUTCString().slice(-12, -4);

  state: State = { time: this.getCurrentTime() };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = this.getCurrentTime();

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
