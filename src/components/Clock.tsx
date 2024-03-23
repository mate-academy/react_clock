import React from 'react';

interface Props {
  today: Date;
  clockName: string;
}

interface State {
  today: Date;
  hours: string;
  minutes: string;
  seconds: string;
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: State = {
    today: this.props.today,
    hours: String(new Date().getHours()),
    minutes: String(new Date().getMinutes()),
    seconds: String(new Date().getSeconds()),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({
        today: this.props.today,
        hours: String(today.getHours()),
        minutes: String(today.getMinutes()),
        seconds: String(today.getSeconds()),
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    let { hours, minutes, seconds } = this.state;

    hours = (Number(hours) < 10 ? '0' : '') + hours;
    minutes = (Number(minutes) < 10 ? '0' : '') + minutes;
    seconds = (Number(seconds) < 10 ? '0' : '') + seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;

    // eslint-disable-next-line no-console
    console.debug(currentTime);

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
