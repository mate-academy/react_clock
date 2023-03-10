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

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });

      this.printCurrentTime();
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  printCurrentTime() {
    window.console.info(
      this.state.today.toUTCString().slice(-12, -4),
    );
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
