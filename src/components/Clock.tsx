import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

function getTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: getTime(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ time: getTime() });

      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevName } = prevProps;
    const { name } = this.props;

    if (prevName !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
