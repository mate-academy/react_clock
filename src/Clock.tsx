import { Component } from 'react';

type State = {
  date: string,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date().toUTCString().slice(-12, -4),
  };

  timerData = 0;

  componentDidMount() {
    this.timerData = window.setInterval(() => {
      this.setState({
        date: new Date().toUTCString().slice(-12, -4),
      });

      window.console.info(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = this.props;

    if (name !== prevProps.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerData);
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
