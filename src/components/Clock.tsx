/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  date: Date;
};

export default class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    if (this.props.hasClock === true) {
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }
  }

  render() {
    const { date } = this.state;
    const { hasClock, clockName } = this.props;

    return (
      <div className={`${hasClock === true ? 'Clock' : 'ClockHide'}`}>
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
