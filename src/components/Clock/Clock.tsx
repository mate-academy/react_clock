/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
  intervals: number[];
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
    intervals: [],
  };

  componentDidMount() {
    this.setState({
      intervals: [
        window.setInterval(() => {
          this.setState({
            time: new Date(),
          });
        }, 1000),
      ],
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const {
      time,
    } = this.state;

    if (time !== prevState.time) {
      console.info(time.toUTCString().slice(-12, -4));
    }

    if (this.props.name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    this.state.intervals.forEach(interval => {
      clearInterval(interval);
    });
  }

  render(): React.ReactNode {
    const {
      time,
    } = this.state;

    return (
      <div className="Clock">
        <strong aria-hidden="true" className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
