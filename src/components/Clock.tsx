import { Component } from "react";

function formatDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type ClockState = {
  date: Date;
};

type ClockProps = {
  clockName: string;
};

export class Clock extends Component<ClockProps, ClockState> {
  state: Readonly<ClockState> = {
    date: new Date(),
  };

  handleTimeUpdate = 0;

  componentDidMount(): void {
    this.handleTimeUpdate = window.setInterval(() => {
      const updatedDate = new Date();
      const updatedTime = formatDate(updatedDate);

      this.setState({ date: updatedDate }),
      console.info(updatedTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    const updatedName = this.props.clockName;
    const prevName = prevProps.clockName;

    if (prevName !== updatedName) {
      console.debug(`Renamed from ${prevName} to ${updatedName}`)
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.handleTimeUpdate);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;
    const formattedTime = formatDate(date);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {" time is "}

        <span className="Clock__time">
          {formattedTime}
        </span>
      </div>
    );
  }
}
