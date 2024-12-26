import React from 'react';

export class Clock extends React.Component<{
  clockName: string;
}> {
  intervalId?: number;

  state = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: { clockName: string }): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
