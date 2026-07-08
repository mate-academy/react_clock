import React from "react";

type ClockState = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, ClockState> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <span className="clock__name">{name}</span>
        {' time is '}
        <span className="clock__time">{time}</span>
      </div>
    );
  }
}
