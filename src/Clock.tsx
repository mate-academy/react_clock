/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable padding-line-between-statements */
import React from 'react';

type ClockState = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, ClockState> {
  state = {
    today: new Date(),
  };

  clockTimerId: number | undefined;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      const newDate = new Date();

      console.log(newDate.toUTCString().slice(-12, -4));

      this.setState({ today: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
