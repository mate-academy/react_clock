import { Component } from 'react';

type Props = {
  name: string,
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { name } = this.props;
    const { name: prevName } = prevProps;
    const { date } = this.state;
    const { date: prevDate } = prevState;

    if (name !== prevName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }

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
