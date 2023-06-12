import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Timer extends Component<Props, State> {

  state: Readonly<State> = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date(),
      });

      window.console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;
    const timeString = time.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
