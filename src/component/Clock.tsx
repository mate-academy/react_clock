import React from 'react';
import { Props } from '../types/Props';
import { State } from '../types/State';

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
    hasClock: false,
    clockName: '',
  };

  timerValue: number = 0;

  componentDidMount(): void {
    this.timerValue = window.setInterval(() => {
      const currentTimeFull = new Date().toUTCString();
      let currentTimeHour = currentTimeFull.slice(-12, -10).toString();
      //Number(currentTimeFull.slice(-12, -10)) + TIME_ZONE
      //).toString();

      const currentTimeMinSec = currentTimeFull.slice(-10, -4);

      if (currentTimeHour === '24') {
        currentTimeHour = '00';
      }

      const currentTime = currentTimeHour + currentTimeMinSec;

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerValue);
  }

  render() {
    const { name } = this.props;

    return (
      name && (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>
          {' time is '}
          <span className="Clock__time">{this.state.time}</span>
        </div>
      )
    );
  }
}
