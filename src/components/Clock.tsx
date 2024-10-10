import React from "react";

type Props = {
  nameOfClock: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toUTCString().slice(-12, -4));
      this.setState({ today: date });
    }, 1000);
  }

  componentDidUpdate(pastProps: Props) {
    if (pastProps.nameOfClock !== this.props.nameOfClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${pastProps.nameOfClock} to ${this.props.nameOfClock}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.nameOfClock}</strong>
        {
          ' time is '
        }
        <span className="Clock__time">
          {
            today.toUTCString().slice(-12, -4)
          }
        </span>
      </div>
    );
  }
}
