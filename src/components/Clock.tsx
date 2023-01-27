import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  time: Date,
  timerId: number,
};

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    const id = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);

    this.setState({
      timerId: id,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
