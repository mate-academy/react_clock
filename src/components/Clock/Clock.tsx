import { Component } from 'react';

type Props = {
  hasClock: boolean;
  clockName: string;
};

type State = {
  time: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  timeIntervalId = 0;

  componentDidMount() {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({ time: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.time.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeIntervalId);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
