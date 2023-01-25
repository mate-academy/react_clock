import { Component } from 'react';

import './Clock.scss';

const formatTime = (time: Date): string => time.toUTCString().slice(-12, -4);

type State = {
  time: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date();

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.info(formatTime(time));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="clock">
        <h3 className="clock__name">
          {this.props.name}
        </h3>
        <span className="clock__time">
          {formatTime(time)}
        </span>
      </div>
    );
  }
}
