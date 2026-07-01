/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

interface ClockState {
  date: Date;
}

export class Clock extends React.Component<Props, ClockState> {
  state: ClockState = {
    date: new Date(),
  };

  private intervalId: number = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });
    this.intervalId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });
      console.log(this.getTimeFromDate(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const oldName = prevProps.name;
    const currentName = this.props.name;

    if (currentName !== oldName) {
      console.warn(`Renamed from ${oldName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  getTimeFromDate = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{this.getTimeFromDate(date)}</span>
      </div>
    );
  }
}
