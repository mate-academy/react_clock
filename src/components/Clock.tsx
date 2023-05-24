import { Component } from 'react';

type ClockProps = {
  clockName: string,
};

type ClockState = {
  date: Date,
};

export class Clock extends Component<ClockProps, ClockState> {
  state = {
    date: new Date(),
  };

  dateId = 0;

  componentDidMount() {
    this.dateId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });

      window.console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.dateId);
  }

  render() {
    const { date } = this.state;
    const time = date.toUTCString().slice(-12, -4);

    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
