import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  hours: number;
  minutes: number;
  seconds: number;
};

export class Clock extends React.Component<Props, State> {
  private timer?: number;

  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getUTCMinutes(),
        seconds: new Date().getUTCSeconds(),
      });

      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name } = this.props;
    const {
      hours,
      minutes,
      seconds,
    } = this.state;

    return (
      <div className="clock">
        <div className="clock__title">Current time:</div>
        <div className="clock__name">{`Name: ${name}`}</div>
        <div className="clock__hours">{hours}</div>
        <div className="clock__minutes">{(minutes < 10) ? `0${minutes}` : minutes}</div>
        <div className="clock__seconds">{(seconds < 10) ? `0${seconds}` : seconds}</div>
      </div>
    );
  }
}
