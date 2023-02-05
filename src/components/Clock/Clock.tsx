/* eslint-disable no-console */
import { Component } from 'react';

type State = {
  time: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  secondsTimerId = 0;

  nameUpdateTimerId = 0;

  componentDidMount() {
    this.secondsTimerId = window.setInterval(() => {
      const time = new Date();

      console.info(this.formatTime(time));

      this.setState({ time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const { name } = this.props;

    if (prevName !== name) {
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.secondsTimerId);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  formatTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { time } = this.state;
    const { name } = this.props;
    const timeString = this.formatTime(time);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
