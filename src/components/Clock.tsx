import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    this.timerId = window.setInterval(() => {
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prev: Props): void {
    const { name } = this.props;

    if (prev.name !== name) {
      console.debug(`Renamed from ${prev.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
