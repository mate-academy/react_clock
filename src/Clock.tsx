import { Component } from 'react';

type State = {
  currentTime: string;
};
type Props = {
  name: string;
};

function toFormattedTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: toFormattedTime(new Date()),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.handleUpdateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const previousName = prevProps.name;
    const currentName = this.props.name;

    if (previousName !== currentName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  handleUpdateTime = () => {
    const now = toFormattedTime(new Date());

    this.setState({
      currentTime: now,
    });

    // eslint-disable-next-line no-console
    console.info(now);
  };

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
