import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  updateTime = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    // eslint-disable-next-line no-console
    console.log(newTime);

    this.setState({ time: newTime });
  };

  private timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {` time is `}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
