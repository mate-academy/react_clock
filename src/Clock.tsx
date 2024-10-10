import React from 'react';

type ClockName = {
  clockName: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<ClockName, State> {
  timerId: number | null = null;

  lastLogTime: number = 0;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentDidUpdate(prevProps: ClockName): void {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
