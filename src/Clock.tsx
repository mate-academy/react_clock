/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type ClockProps = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
