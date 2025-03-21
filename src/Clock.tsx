import React from 'react';

interface Props {
  clockName: string;
}

interface States {
  today: Date;
}

export class Clock extends React.Component<Props, States> {
  state: Readonly<States> = {
    today: new Date(),
  };

  timerTimeIntervalId = 0;

  componentDidMount(): void {
    this.timerTimeIntervalId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTimeIntervalId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render(): React.ReactNode {
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
