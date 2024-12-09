/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  timerId = 0;

  state = {
    timer: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTimer = new Date().toUTCString().slice(-12, -4);

      this.setState({ timer: newTimer });

      console.log(newTimer);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.timer}</span>
      </div>
    );
  }
}
