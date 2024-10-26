import React from 'react';

interface ClockProps {
  name: string;
}

type ClockState = {
  currentTime: Date;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | undefined;

  state: ClockState = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    const { currentTime } = this.state;
    const formattedTime = currentTime.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{formattedTime}</span>
      </div>
    );
  }
}
