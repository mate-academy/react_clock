import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerIdClock = 0;

  componentDidMount() {
    this.timerIdClock = window.setInterval(() => {
      this.setState({ date: new Date() });

      window.console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prev: Props): void {
    const { name } = this.props;

    if (prev.name !== name) {
      // eslint-disable-next-line no-console
      window.console.debug(`Renamed from ${prev.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdClock);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
