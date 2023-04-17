import { Component } from 'react';

function getCurrentTime() {
  const time = new Date();

  return time.toUTCString().slice(-12, -4);
}

interface State {
  today: string;
}

interface Props {
  clockName: string;
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
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
