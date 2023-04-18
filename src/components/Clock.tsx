import { Component } from 'react';

function getDate(): string {
  const value = new Date();

  return value.toUTCString().slice(-12, -4);
}

type State = {
  date: string,
  timer: number,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: getDate(),
    timer: 0,
  };

  componentDidMount(): void {
    this.setState({
      timer: window.setInterval(() => {
        this.setState({ date: getDate() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
