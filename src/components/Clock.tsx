/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.PureComponent<Props> {
  state = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const currentTime = this.state.today.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
