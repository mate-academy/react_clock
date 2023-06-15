import { Component } from 'react';

type Props = {
  clockName: string
};

type State = {
  today: string
};

export class Clock extends Component<Props> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  runClock = 0;

  componentDidMount() {
    this.runClock = window.setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
      /* eslint-disable-next-line no-console */
      console.info((this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      /* eslint-disable-next-line no-console */
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.runClock);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
