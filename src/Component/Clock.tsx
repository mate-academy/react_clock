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

  newTimerId = 0;

  componentDidMount(): void {
    this.newTimerId = window.setInterval(() => {
      const newTime = new Date();

      console.info(newTime.toUTCString().slice(-12, -4));

      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = this.props;

    if (prevProps.name !== name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.newTimerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
