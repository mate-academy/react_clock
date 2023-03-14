import { Component } from 'react';

function getFormattedDate(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

type State = {
  date: string;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: getFormattedDate(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ date: getFormattedDate() });
      window.console.info(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name: oldName } = prevProps;
    const { name } = this.props;

    if (oldName !== name) {
      window.console.debug(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
