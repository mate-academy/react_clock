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

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      this.setState({ date: new Date() });
      window.console.info(
        this.state.date.toUTCString().slice(-12, -4),
      );
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

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
