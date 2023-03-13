import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

const formatTime = (date: Date): string => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerClockTimeId = 0;

  componentDidMount(): void {
    this.timerClockTimeId = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(
        formatTime(this.state.today),
      );
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { clockName: newName } = this.props;
    const { clockName: oldName } = prevProps;

    if (newName !== oldName) {
      window.console.debug(
        `Renamed from ${oldName} to ${newName}`,
      );
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerClockTimeId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatTime(today)}
        </span>
      </div>
    );
  }
}
