import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

function getFormattedTime(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(
        getFormattedTime(this.state.today),
      );
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

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormattedTime(today)}
        </span>
      </div>
    );
  }
}
