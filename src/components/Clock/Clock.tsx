import React from 'react';

interface ClockState {
  today: string;
}

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  private timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
