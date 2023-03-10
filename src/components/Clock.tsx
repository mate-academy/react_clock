/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ time: new Date() });
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
