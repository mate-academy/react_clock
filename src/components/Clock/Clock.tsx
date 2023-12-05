import React from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
    timerId: 0,
  };

  componentDidMount(): void {
    this.getTime();
  }

  componentWillUnmount(): void {
    this.stopTimer();
  }

  getToday = (): void => {
    const todayTime = new Date().toUTCString().slice(-12, -4);

    if (this.state.timerId !== null) {
      this.setState({ today: todayTime });
    }
  };

  stopTimer = (): void => {
    if (this.state.timerId !== null) {
      window.clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
  };

  getTime = (): void => {
    const timerId = window.setInterval(() => {
      this.getToday();
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);

    this.setState({ timerId });
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
