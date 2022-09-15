import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

export class Clock extends Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line
      console.info(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = prevProps;

    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${clockName} to ${this.props.clockName}`)
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
