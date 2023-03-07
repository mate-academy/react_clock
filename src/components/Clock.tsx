import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
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
        this.state.today.toUTCString().slice(-12, -4),
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
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
