import { Component } from 'react';

interface Props {
  clockName: string;
}

interface State {
  date: string;
}

function getDate(): string {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    date: getDate(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: getDate() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.date}`);
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
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
