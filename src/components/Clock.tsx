import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ date: new Date() });

      console.info(this.state.date.toLocaleTimeString()); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;
    const { clockName: prevName } = prevProps;

    if (clockName !== prevName) {
      console.debug(`Renamed from ${prevName} to ${clockName}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
