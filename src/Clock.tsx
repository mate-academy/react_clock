/* eslint-disable no-console */
import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
  clockName: string;
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerId = 0;

  timeUpdate = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    this.timeUpdate = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });
      console.info(this.formatTime(newDate));
    }, 1000);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    const { clockName } = this.state;
    const { clockName: prevClockName } = prevState;

    const isClockNameChanged = clockName !== prevClockName;

    if (isClockNameChanged) {
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timerId);
    window.clearTimeout(this.timeUpdate);
  }

  formatTime = (date: Date) => (
    date.toUTCString().slice(-12, -4)
  );

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { today, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.formatTime(today)}
        </span>
      </div>
    );
  }
}
