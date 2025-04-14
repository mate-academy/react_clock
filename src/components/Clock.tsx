/* eslint-disable no-console */

import React from 'react';

type Props = {
  name?: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  intervalId = 0;

  handleSecondPass = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: newTime });
    console.log(newTime);
  };

  componentDidMount() {
    this.intervalId = window.setInterval(this.handleSecondPass, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>{' '}
      </div>
    );
  }
}
