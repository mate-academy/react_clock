import { Component } from 'react';

type State = {
  day: Date,
};

type Props = {
  clock: string
};

export class Clock extends Component<Props, State> {
  state = {
    day: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.generateNewDate, 1000);
  }

  componentDidUpdate(prevClock: Props) {
    if (this.props.clock !== prevClock.clock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClock.clock} to ${this.props.clock}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  generateNewDate = () => {
    this.setState({ day: new Date() });

    // eslint-disable-next-line no-console
    console.info(this.state.day.toLocaleTimeString());
  };

  render() {
    const { clock } = this.props;
    const { day } = this.state;
    const time = day.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clock}
        </strong>

        {' time is '}
        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
