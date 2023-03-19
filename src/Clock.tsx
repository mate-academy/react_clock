import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

function fixTime(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(fixTime(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const {
      clockName,
    } = this.props;

    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(
        `Renamed from ${prevProps.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {
      clockName,
    } = this.props;

    const {
      today,
    } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {fixTime(today)}
        </span>
      </div>
    );
  }
}
