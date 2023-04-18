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
  name: string,
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.date !== this.state.date) {
      // eslint-disable-next-line no-console
      console.info(this.state.date);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
