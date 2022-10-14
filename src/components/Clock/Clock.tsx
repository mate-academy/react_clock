import { Component } from 'react';

const timeToString = (date: Date): string => date.toUTCString().slice(-12, -4);

interface IClockProps {
  name: string;
}

interface IClockState {
  date: Date;
}

export class Clock extends Component<IClockProps, IClockState> {
  state: Readonly<IClockState> = {
    date: new Date(),
  };

  intervalTimeId = 0;

  componentDidMount() {
    this.intervalTimeId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.info(timeToString(this.state.date));
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalTimeId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeToString(date)}
        </span>
      </div>
    );
  }
}
