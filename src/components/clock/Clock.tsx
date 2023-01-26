/* eslint-disable no-console */

import { Component } from 'react';

const dateFormating = (date: Date) => (date.toUTCString().slice(-12, -4));

type State = {
  today: Date,
};
type Props = {
  clockName: string
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerClock = 0;

  componentDidMount() {
    this.timerClock = window.setInterval((this.clockTick), 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerClock);
  }

  clockTick = () => {
    this.setState({
      today: new Date(),
    });
    console.info(dateFormating(this.state.today));
  };

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {dateFormating(today)}
        </span>
      </div>
    );
  }
}
