import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });

      window.console.info(this.getTime(this.state.time));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name } = this.props;

    if (oldName !== name) {
      window.console.debug(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  getTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getTime(time)}
        </span>
      </div>
    );
  }
}
