import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
  clockName: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
    clockName: this.props.name,
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    // Перевірка на зміну пропса name
    if (this.props.name !== prevProps.name) {
      this.setState({ clockName: this.props.name });
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
