/* eslint-disable no-console */
import { Component } from 'react';

type State = {
  clockName: string;
  today: Date,
};

export class Clock extends Component<{ name: string }, State> {
  state: Readonly<State> = {
    clockName: this.props.name,
    today: new Date(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });
      console.info(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{ name: string }>,
  ): void {
    if (prevProps.name !== this.props.name) {
      this.updateClockName(this.props.name);
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockTimerId);
  }

  updateClockName(clockName: string) {
    this.setState({ clockName });
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
