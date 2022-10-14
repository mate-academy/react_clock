import { Component } from 'react';

type Props = {
  hasClock: boolean,
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.tick, 1000);
  }

  componentDidUpdate(_: never, prevState: State) {
    const { date } = this.state;
    const { date: prevDate } = prevState;

    if (date !== prevDate) {
      // eslint-disable-next-line no-console
      console.info(date.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
