import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line no-console
    console.info(this.getTime());

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateTime = () => {
    this.setState({ time: new Date() });
  };

  getTime = (): string => {
    return this.state.time.toUTCString().slice(-12, -4);
  };

  render() {
    const { name } = this.props;
    const time = this.getTime();

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
