import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
  }

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
          {time}
        </span>
      </div>
    );
  }
}
