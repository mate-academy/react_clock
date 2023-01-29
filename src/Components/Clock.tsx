import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  time: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  intervalId = setInterval(() => {});

  componentDidMount() {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime = () => {
    this.setState({
      time: new Date(),
    });

    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
  };

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
