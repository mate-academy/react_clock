/* eslint-disable no-console */
import { Component } from 'react';

type State = {
  time: string,
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerTime = 0;

  componentDidMount() {
    this.timerTime = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = this.props;

    if (name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTime);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
