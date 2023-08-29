/* eslint-disable no-console */

import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();

      console.info(currentDate.toUTCString().slice(-12, -4));
      this.setState({ currentTime: currentDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (

      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
