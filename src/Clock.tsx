import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      window.console.info(`${this.state.date.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;
    const time = date.toUTCString().slice(-12, -4);

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
