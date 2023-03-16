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
  state: State = {
    date: getFormattedDate(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ date: getFormattedDate() });
      window.console.info(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = prevProps;
    const { name: newName } = this.props;

    if (name !== newName) {
      window.console.debug(`Renamed from ${name} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
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
