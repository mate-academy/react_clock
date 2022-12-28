/* eslint-disable no-console */
import React, { Component } from 'react';

type Props = {
  clock: string,
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval((() => {
      const date = new Date();

      this.setState({ date });

      console.info(date.toUTCString().slice(-12, -4));
    }), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clock } = this.props;
    const prevName = prevProps.clock;

    if (clock !== prevName) {
      console.debug(`Renamed from ${prevName} to ${clock}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clock } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clock}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
