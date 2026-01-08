import React from 'react';

type Props = {
  name: string;
};
type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private interval: number | null = null;

  componentDidMount(): void {
    this.startInterval();
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    this.stopInterval();
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }

  startInterval(): void {
    if (this.interval !== null) {
      return;
    }

    setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      });
    }, 1000);
  }

  stopInterval(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
