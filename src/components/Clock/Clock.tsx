import React from 'react';

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type ClockProps = {
  name: string;
};

export class Clock extends React.Component<ClockProps> {
  state = {
    currentTime: getCurrentTime(),
  };

  timerIdCurrentTime = 0;

  componentDidMount(): void {
    this.timerIdCurrentTime = window.setInterval(() => {
      this.setState({ currentTime: getCurrentTime() });

      // eslint-disable-next-line no-console
      console.log(getCurrentTime());
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdCurrentTime);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
