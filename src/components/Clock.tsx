import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  clockName: string;
};

function getCurrentTime() {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: getCurrentTime(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
