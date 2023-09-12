import React from 'react';

type Props = {
  clockName: string
};
type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  dateTimer = 0;

  componentDidMount(): void {
    this.dateTimer = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.getPrettyTime());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimer);
  }

  getPrettyTime(): string {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getPrettyTime()}
        </span>
      </div>
    );
  }
}
