/* eslint-disable no-console */
import React from 'react';

type Props = {
  clock: string;
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
      this.setState(() => ({
        currentTime: new Date(),
      }));
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps !== this.props) {
      console.debug(`Renamed from ${prevProps.clock} to ${this.props.clock}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clock } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clock}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
